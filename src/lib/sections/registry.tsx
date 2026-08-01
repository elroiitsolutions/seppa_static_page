import React from 'react';
import ContentBlock from '@/components/ui/ContentBlock';
import FeaturesSection from '@/components/packaging/FeaturesSection';
import OverviewSection from '@/components/packaging/OverviewSection';
import MethodologySection from '@/components/packaging/MethodologySection';
import PackagingWhyChooseUs from '@/components/packaging/PackagingWhyChooseUs';
import LatestBlogs from '@/components/home/LatestBlogs';
import RichText from '@/components/ui/RichText';
// Import other components as needed

export const sectionRegistry: Record<string, React.FC<any>> = {
  'sections.overview-section': OverviewSection,
  'sections.features-section': FeaturesSection,
  'sections.methodology-section': MethodologySection,
  'sections.why-choose-section': PackagingWhyChooseUs,
  'sections.latest-blogs': LatestBlogs,
  'shared.content-block': ContentBlock,
  'shared.rich-text': RichText,
  // Add other mappings here as they are developed
};

interface DynamicZoneRendererProps {
  sections: any[];
}

export const DynamicZoneRenderer: React.FC<DynamicZoneRendererProps> = ({ sections }) => {
  if (!sections || !Array.isArray(sections)) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionRegistry[section.__component];
        if (!Component) {
          console.warn(`No component found for ${section.__component}`);
          return null;
        }
        return <Component key={`${section.__component}-${index}`} {...section} />;
      })}
    </>
  );
};
