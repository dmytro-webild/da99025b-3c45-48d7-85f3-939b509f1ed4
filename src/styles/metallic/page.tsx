import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function MetallicStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="pill">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Metallic Style"
          title="Chrome finish, premium feel"
          description="Shimmering metallic effects convey luxury and sophistication. Ideal for premium products."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
