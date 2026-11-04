import BlogView from './BlogView';

export const metadata = {
  title: 'Seppa Solutions - Latest Packaging & Bottling News',
  description: 'Read the latest trends in beverage processing, liquid packaging, and PET blow molding technology from Seppa Solutions.',
};

export default function BlogPage({ blogs }: { blogs: any[] }) {
  return <BlogView blogs={blogs} />;
}
