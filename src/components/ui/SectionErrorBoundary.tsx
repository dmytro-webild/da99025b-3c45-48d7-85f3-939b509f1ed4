import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * Per-section error boundary inserted around every assembled section by the
 * backend's page-assembler. Goal: a single section that throws at runtime
 * (missing required prop, broken `.map`, etc.) shows a small placeholder
 * instead of taking down the entire page with a white screen.
 *
 * Also reports the failure via the `/__webild/render-status` probe channel
 * so Bob-AI's post-commit poll picks up the section name + error message and
 * the model gets the signal to fix the right section on the next loop turn.
 *
 * The probe POST is best-effort and silent — sandbox-only (gated by
 * `window.parent !== window`), so production deploys never call it.
 */

interface Props {
  /** Section slug — same value the wrapping `<div data-section="…">` uses. */
  name: string;
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage?: string;
}

const RENDER_STATUS_URL = "/__webild/render-status";

export default class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      errorMessage:
        error instanceof Error ? error.message : String(error ?? "unknown"),
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (typeof window === "undefined") return;
    if (window.parent === window) return;
    try {
      fetch(RENDER_STATUS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ok: false,
          reason: "section_error_boundary",
          section: this.props.name,
          error: String(error?.message || error || "unknown"),
          stack: String(error?.stack || "").slice(0, 4000),
          componentStack: String(info?.componentStack || "").slice(0, 4000),
          t: Date.now(),
        }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* ignore */
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          aria-label="Section render error placeholder"
          className="w-content-width mx-auto my-8 p-6 card rounded text-center"
        >
          <p className="text-base font-medium text-foreground">
            This section failed to render.
          </p>
          <p className="mt-1 text-sm text-foreground/60">
            Section: <code className="font-mono">{this.props.name}</code>
          </p>
          {this.state.errorMessage ? (
            <p className="mt-2 text-xs text-foreground/50 max-w-xl mx-auto break-words">
              {this.state.errorMessage}
            </p>
          ) : null}
          <p className="mt-3 text-xs text-foreground/40">
            Tell Bob exactly what's wrong (e.g. &quot;fix the {this.props.name} section&quot;) to retry.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
