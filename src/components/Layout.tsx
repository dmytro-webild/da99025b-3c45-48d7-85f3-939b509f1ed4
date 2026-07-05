import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import FooterBasic from "@/components/sections/footer/FooterBasic";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterBasic
                columns={[
                  { title: "Follow", items: [{ label: "Instagram", href: "#" }, { label: "TikTok", href: "#" }, { label: "Twitter", href: "#" }] },
                  { title: "Explore", items: [{ label: "Blog", href: "#" }, { label: "Gallery", href: "#gallery" }, { label: "About", href: "#about" }] },
                  { title: "Connect", items: [{ label: "Contact", href: "#contact" }, { label: "Collaborate", href: "#" }] },
                ]}
                leftText="© 2025 Anya. All rights reserved."
                rightText="Made with love"
              />
    </StyleProvider>
  );
}
