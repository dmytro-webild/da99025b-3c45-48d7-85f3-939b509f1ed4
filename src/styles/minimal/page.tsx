import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function MinimalStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="default">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Minimal Style"
          title="Clean lines, clear purpose"
          description="Stripped-back design that lets content breathe. No distractions, just clarity and focus."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
