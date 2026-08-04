import React from 'react';
import ReactMarkdown from 'react-markdown';

interface RichTextProps {
  content: string;
}

const RichText: React.FC<RichTextProps> = ({ content }) => {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-seppa-red prose-img:rounded-2xl prose-img:shadow-sm mb-12">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default RichText;
