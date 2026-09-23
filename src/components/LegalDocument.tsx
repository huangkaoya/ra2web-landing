'use client';

import SubpageLayout from './SubpageLayout';
import BrandText from '@/i18n/BrandText';
import type { LegalDoc } from '@/i18n/types';

export default function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <SubpageLayout title={doc.title}>
      <div className="space-y-6">
        <h2 className="text-4xl font-normal uppercase font-['Oswald',sans-serif] mb-8 text-center"><BrandText text={doc.heading} /></h2>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto mb-12"></div>
        <p className="mb-4 text-gray-600">{doc.updated}</p>
        <div className="space-y-6 text-gray-700">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{section.heading}</h3>
              <div className="space-y-3">
                {section.blocks.map((block, index) => {
                  if (block.type === 'p') {
                    return <p key={index}>{block.text}</p>;
                  }
                  if (block.type === 'ul') {
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-1">
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <div key={index}>
                      <h4 className="font-bold">{block.heading}</h4>
                      <p>{block.text}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
