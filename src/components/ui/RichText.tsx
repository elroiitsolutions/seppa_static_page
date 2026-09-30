import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface RichTextProps {
  content: string;
}

const RichText: React.FC<RichTextProps> = ({ content }) => {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-seppa-red prose-img:rounded-2xl prose-img:shadow-sm prose-table:border-collapse prose-table:w-full prose-th:bg-gray-100 prose-th:p-3 prose-th:border prose-th:border-gray-200 prose-td:p-3 prose-td:border prose-td:border-gray-200 mb-12">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default RichText;
