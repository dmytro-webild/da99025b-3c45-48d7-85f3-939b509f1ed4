// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import CursorTrail from "@/components/ui/CursorTrail";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import MilestonesSection from './HomePage/sections/Milestones';
import ShowcaseSection from './HomePage/sections/Showcase';


import GallerySection from './HomePage/sections/Gallery';export default function HomePage(): React.JSX.Element {
  return (
<StyleProvider siteBackground="none" heroBackground="none" buttonVariant="bounce">
        <SiteBackgroundSlot />
        <CursorTrail color={{ r: 76, g: 175, b: 80 }} />

        <HeroSection />

        <AboutSection />

        <MilestonesSection />

        <ShowcaseSection />
      <GallerySection />

        
      </StyleProvider>
  );
}
