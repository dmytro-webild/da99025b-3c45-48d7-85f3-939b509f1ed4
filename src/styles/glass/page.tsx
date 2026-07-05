import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function GlassStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="expand">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Glass Style"
          title="Frosted elegance meets modern design"
          description="Translucent surfaces with soft blur effects create depth and sophistication. Perfect for premium brands."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
