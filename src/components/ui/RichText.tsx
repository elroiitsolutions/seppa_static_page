import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface RichTextProps {
  content: string;
}

const RichText: React.FC<RichTextProps> = ({ content }) => {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-seppa-red mb-12">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => (
            <div className="my-8 w-full overflow-hidden rounded-lg border border-[#e5e7eb] bg-[#FDFBF6] shadow-sm">
              <table className="w-full table-auto border-collapse text-left bg-[#FDFBF6]" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-[#F3F4F6]" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th
              className="px-3.5 py-4 md:px-6 md:py-5 font-bold text-[#111827] text-xs sm:text-sm md:text-[15px] border-b border-r border-[#e5e7eb] last:border-r-0 text-left tracking-normal break-words align-top bg-[#F3F4F6]"
              {...props}
            />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="divide-y divide-[#ede5d8] bg-[#FDFBF6]" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="border-b border-[#ede5d8] last:border-b-0 hover:bg-[#faf4e6] transition-colors bg-[#FDFBF6]" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td
              className="px-3.5 py-4 md:px-6 md:py-5 text-[#334155] text-xs sm:text-sm md:text-[14.5px] leading-relaxed border-r border-[#ede5d8] last:border-r-0 align-top break-words first:font-bold first:text-[#111827] bg-[#FDFBF6]"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a className="text-seppa-red font-semibold hover:underline transition-colors" {...props} />
          ),
          img: ({ node, ...props }) => (
            <img className="rounded-2xl shadow-md my-6 w-full object-cover max-h-[520px]" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-seppa-red bg-red-50/30 p-4 pl-6 rounded-r-xl italic my-6 text-gray-700" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default RichText;

