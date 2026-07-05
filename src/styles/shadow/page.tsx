import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function ShadowStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="bounce">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Shadow Style"
          title="Dramatic depth, layered shadows"
          description="Bold shadow effects create striking visual depth. Perfect for portfolios and creative sites."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
