import React from 'react';

type TagType = '百科' | '新闻' | '公告' | '活动' | string;

interface TagProps {
  category: TagType;
  className?: string;
}

const tagStyles: Record<string, string> = {
  '公告': 'bg-[#ff9408]/10 text-[#ff9408] border-[#ff9408]/20',
  '新闻': 'bg-blue-600/10 text-blue-600 border-blue-600/20',
  '百科': 'bg-emerald-600/10 text-emerald-600 border-emerald-600/20',
  '活动': 'bg-purple-600/10 text-purple-600 border-purple-600/20',
  'default': 'bg-gray-600/10 text-gray-600 border-gray-600/20'
};

export default function NewsTag({ category, className = "" }: TagProps) {
  const style = tagStyles[category] || tagStyles['default'];
  
  return (
    <span className={`shrink-0 text-[10px] font-bold uppercase px-2 py-1 rounded-none border leading-none tracking-wider ${style} ${className}`}>
      {category}
    </span>
  );
}

