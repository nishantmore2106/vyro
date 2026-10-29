import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProcessSection } from './components/ProcessSection';
import { ProductShowcase } from './components/ProductShowcase';
import { WorkflowSection } from './components/WorkflowSection';
import { BrandPresenceSection } from './components/BrandPresenceSection';
import { AppScreensShowcase } from './components/AppScreensShowcase';
import { PlatformsSection } from './components/PlatformsSection';
import { DesignLanguageSection } from './components/DesignLanguageSection';
import { TabletShowcaseSection } from './components/TabletShowcaseSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <main className="w-full bg-[#030712]">
      <Hero />
      <About />
      <ProcessSection />
      <ProductShowcase />
      <WorkflowSection />
      <BrandPresenceSection />
      <AppScreensShowcase />
      <PlatformsSection />
      <DesignLanguageSection />
      <TabletShowcaseSection />
      <Footer />
    </main>
  );
};

export default App;
