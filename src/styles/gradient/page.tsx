import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function GradientStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="slide">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Gradient Style"
          title="Bold colors that flow together"
          description="Smooth color transitions create energy and movement. Ideal for creative and tech brands."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
