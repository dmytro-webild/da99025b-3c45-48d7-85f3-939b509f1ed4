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
                  { title: "Follow", items: [{ label: "Website", href: "https://www.martullo-blocher.ch/" }, { label: "Twitter", href: "#" }] },
                  { title: "Explore", items: [{ label: "About", href: "#about" }, { label: "Milestones", href: "#milestones" }] },
                  { title: "Connect", items: [{ label: "Contact", href: "#contact" }] },
                ]}
                leftText="© 2025 Magdalena Martullo-Blocher. All rights reserved."
                rightText="For a Strong Switzerland"
              />
    </StyleProvider>
  );
}
