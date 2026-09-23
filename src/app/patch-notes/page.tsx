"use client";

import SubpageLayout from '@/components/SubpageLayout';
import { useI18n } from '@/i18n/LocaleProvider';
import { fill } from '@/i18n/format';

export default function PatchNotes() {
  const { m } = useI18n();
  const patchNotes = m.patchNotes;

  return (
    <SubpageLayout title={patchNotes.title}>
      <div className="space-y-6">
        <h2 className="text-4xl font-normal uppercase font-['Oswald',sans-serif] mb-8 text-center">{patchNotes.heading}</h2>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto mb-12"></div>
        
        <div className="space-y-10">
          {patchNotes.entries.map((patch, index) => (
            <div key={patch.version} className="border-b border-gray-200 pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {fill(patchNotes.version, { version: patch.version })}
                  <span className="ml-2 text-sm font-normal text-gray-500">({patch.date})</span>
                </h3>
                {index === 0 && (
                  <span className="mt-2 md:mt-0 inline-block bg-[#ff9408] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {patchNotes.latest}
                  </span>
                )}
              </div>
              
              <ul className="list-disc pl-5 space-y-2">
                {patch.changes.map((change) => (
                  <li key={change} className="text-gray-700">
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SubpageLayout>
  );
}
