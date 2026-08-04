import React from 'react';
import PackagingPageLayout from '@/components/packaging/PackagingPageLayout';
// We'll import other layouts as we create them
// import MachineTemplate from '@/components/templates/MachineTemplate';
// import BlogTemplate from '@/components/templates/BlogTemplate';

// This maps the template slug from Strapi to the React component
export const templateRegistry: Record<string, React.FC<any>> = {
  'packaging': PackagingPageLayout,
  // 'machine': MachineTemplate,
  // 'blog': BlogTemplate,
  // 'generic': GenericTemplate,
  // 'home': HomeTemplate,
};
