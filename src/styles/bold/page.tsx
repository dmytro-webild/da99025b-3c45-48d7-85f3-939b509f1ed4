import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function BoldStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="default">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Bold Style"
          title="Strong presence, confident design"
          description="Dynamic shadows and sturdy shapes create impact. Perfect for brands that want to stand out."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
