'use client';

import React from 'react';

export default function ShareBar() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const shareButtons = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5 md:w-5 md:h-5 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.37-4.669 1.235 0 2.528.22 2.528.22v2.78h-1.423c-1.49 0-1.95.925-1.95 1.874v2.251h3.132l-.5 3.47h-2.632V23.927C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      hoverClass: 'hover:bg-[#ff9408]'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5 md:w-5 md:h-5 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.958 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      hoverClass: 'hover:bg-[#1DA1F2]'
    }
  ];

  return (
    <>
      {/* 桌面端侧边分享栏 */}
      <aside className="hidden lg:flex flex-col gap-4 sticky top-32 h-fit">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-2">分享</p>
        {shareButtons.map((btn) => (
          <button 
            key={btn.name}
            className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 ${btn.hoverClass} hover:text-white transition-all shadow-sm group`}
            title={`分享到 ${btn.name}`}
          >
            {btn.icon}
          </button>
        ))}
        <button 
          onClick={handlePrint}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-800 hover:text-white transition-all shadow-sm group"
          title="打印文章"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 012-2H5a2 2 0 012 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        </button>
      </aside>

      {/* 移动端分享栏 (由外部逻辑控制展示，这里提供一个 Portal 或供父组件在特定位置渲染的结构) */}
      {/* 注意：在 Server Page 中我们直接在对应位置渲染这个组件的移动端部分 */}
    </>
  );
}

export function MobileShareBar() {
  const shareButtons = [
    { name: 'Facebook', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.37-4.669 1.235 0 2.528.22 2.528.22v2.78h-1.423c-1.49 0-1.95.925-1.95 1.874v2.251h3.132l-.5 3.47h-2.632V23.927C19.612 23.027 24 18.062 24 12.073z"/></svg> },
    { name: 'Twitter', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.958 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg> }
  ];

  return (
    <div className="lg:hidden mt-12 py-6 border-t border-b border-gray-100 flex items-center justify-center gap-6">
      <span className="text-xs font-bold text-gray-400 uppercase">分享文章:</span>
      <div className="flex gap-4">
        {shareButtons.map((btn) => (
          <button key={btn.name} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shadow-sm">
            {btn.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

