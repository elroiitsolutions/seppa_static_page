"use client";

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FaqItem {
  id: number;
  question: string;
  answer: any; // We expect rich text here
}

interface FaqSectionProps {
  id: number;
  title: string;
  description?: string;
  faqs: FaqItem[];
}

// Simple component to render Strapi Rich Text cleanly
const RichTextRenderer = ({ content }: { content: any }) => {
  // If it's a Blocks format (array), we do a simple render or stringify for now.
  // Ideally, you use BlocksRenderer from @strapi/blocks-react-renderer.
  // For simplicity and safety, we'll extract text or render as raw HTML if it's markdown.
  if (!content) return null;
  
  if (typeof content === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  // If using Strapi Blocks (JSON array)
  if (Array.isArray(content)) {
    return (
      <div className="prose prose-sm max-w-none text-gray-600">
        {content.map((block: any, idx: number) => {
          if (block.type === 'paragraph') {
            return (
              <p key={idx} className="mb-2">
                {block.children?.map((child: any, cIdx: number) => {
                  let text = child.text || '';
                  if (child.bold) text = `<strong>${text}</strong>`;
                  if (child.italic) text = `<em>${text}</em>`;
                  if (child.underline) text = `<u>${text}</u>`;
                  return <span key={cIdx} dangerouslySetInnerHTML={{ __html: text }} />;
                })}
              </p>
            );
          }
          // Fallback for lists, headings, etc if needed
          return <p key={idx}>{JSON.stringify(block)}</p>;
        })}
      </div>
    );
  }

  return <div>{JSON.stringify(content)}</div>;
};

const FaqSection: React.FC<FaqSectionProps> = ({ title, description, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="py-12 bg-white rounded-2xl shadow-sm border border-gray-100 my-8 p-6 md:p-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-heading font-bold text-dark mb-4">{title}</h2>
        {description && <p className="text-gray-600 text-lg">{description}</p>}
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={faq.id} 
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-seppa-red/30 bg-red-50/30' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-seppa-red' : 'text-dark'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${isOpen ? 'bg-seppa-red text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <FiChevronDown />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-gray-600">
                  <RichTextRenderer content={faq.answer} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
