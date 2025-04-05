"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="footer-links text-center mb-6">
          <Link 
            href="/privacy" 
            className="text-gray-300 hover:text-white mx-2"
          >
            隐私政策
          </Link>
          
          <span className="text-gray-500 mx-2">|</span>
          
          <Link 
            href="/cookies" 
            className="text-gray-300 hover:text-white mx-2"
          >
            Cookie政策
          </Link>
          
          <span className="text-gray-500 mx-2">|</span>
          
          <Link 
            href="/tos" 
            className="text-gray-300 hover:text-white mx-2"
          >
            服务条款
          </Link>
          
          <span className="text-gray-500 mx-2">|</span>
          
          <a 
            href="mailto:contact@chronodivide.com" 
            className="text-gray-300 hover:text-white mx-2"
          >
            联系我们
          </a>
        </div>
        
        <div className="legal-info text-sm text-gray-400 text-center max-w-3xl mx-auto mb-4">
          <p>
            法律声明：RA2WEB® 是 RA2WEB LTD 的注册商标，红色井界™ 王二火大™ 网页红井™ 及 "红围巾鸟"卡通形象 是 RA2WEB LTD 的商标，受法律保护。
            红色警戒®是美国艺电公司的注册商标，受法律保护，页面展示仅用于说明背景，无侵权意图。游戏为非盈利作品，使用部分红色警戒®美术素材，无侵权意图，目前正在逐步替换中。
          </p>
        </div>
        
        <div className="copyright text-center text-gray-500 text-sm">
          <p>Copyright © {new Date().getFullYear()} RA2WEB</p>
        </div>
      </div>
    </footer>
  );
} 