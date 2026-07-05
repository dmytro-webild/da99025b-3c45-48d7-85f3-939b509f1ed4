import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import "./theme.css";

export default function NeonStyle() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="magnetic">
        <SiteBackgroundSlot />
        <HeroSplit
          tag="Neon Style"
          title="Electric glow, cyberpunk energy"
          description="Glowing borders and vibrant accents create a futuristic, high-tech aesthetic. Perfect for gaming and tech."
          primaryButton={{ text: "Get Started", href: "#" }}
          secondaryButton={{ text: "Learn More", href: "#" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          textAnimation="slide-up"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
