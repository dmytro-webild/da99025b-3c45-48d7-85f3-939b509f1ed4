import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function ElegantStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="default">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Elegant Style"
          title="Timeless serif, refined luxury"
          description="Classic typography meets modern design. Perfect for luxury brands, hotels, and premium services."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
