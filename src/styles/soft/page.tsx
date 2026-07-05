import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function SoftStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="bounce">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Soft Style"
          title="Gentle shadows, warm aesthetics"
          description="Subtle depth through soft shadows creates a welcoming, approachable feel. Great for lifestyle brands."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
