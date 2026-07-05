import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function ElevatedStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="default">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Elevated Style"
          title="Stacked depth, dimensional design"
          description="Layered shadows create a floating, 3D effect. Perfect for modern apps and SaaS products."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
