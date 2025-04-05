import Link from 'next/link';

interface SubpageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function SubpageLayout({ title, children }: SubpageLayoutProps) {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/img/Get-bg.jpg")' }}>
      {/* 导航栏 */}
      <header className="bg-[#1e2328] text-white py-4 border-b-2 border-[#ff9408]">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-[30px] font-normal uppercase font-['Oswald',sans-serif]">{title}</h1>
            <Link 
              href="/" 
              className="bg-[#ff9408] hover:bg-[#e0840b] text-white py-2 px-6 transition-colors uppercase font-bold tracking-wide"
            >
              返回主页
            </Link>
          </div>
        </div>
      </header>
      
      {/* 主内容区 */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-[1100px]">
          <div className="bg-white/95 p-8 shadow-md">
            {children}
          </div>
        </div>
      </main>
      
      {/* 页脚 */}
      <footer className="w-full text-center bg-black/60 text-white py-7">
        <div className="max-w-[1100px] mx-auto px-4">
          <p className="footer-links text-[#a9abad] text-[13px] flex items-center justify-center flex-wrap gap-1">
            <a href="/privacy" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">隐私政策</a> 
            <span className="text-[#a9abad]">|</span>
            <a href="/cookies" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">Cookie政策</a> 
            <span className="text-[#a9abad]">|</span>
            <a href="/tos" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">服务条款</a> 
            <span className="text-[#a9abad]">|</span>
            <a href="mailto:contact@chronodivide.com" className="text-[#a9abad] hover:text-white no-underline px-2" rel="nofollow">联系我们</a>
          </p>
          <br />
          <p className="text-[13px] text-[#a9abad]">法律声明：RA2WEB® 是 RA2WEB LTD 的注册商标，红色井界™ 王二火大™ 网页红井™ 及 "红围巾鸟"卡通形象 是 RA2WEB LTD 的商标，受法律保护。红色警戒®是美国艺电公司的注册商标，受法律保护，页面展示仅用于说明背景，无侵权意图。游戏为非盈利作品，使用部分红色警戒®美术素材，无侵权意图，目前正在逐步替换中。</p>
          <p className="text-[13px] text-[#a9abad]">Copyright © {new Date().getFullYear()} RA2WEB</p>
        </div>
      </footer>
    </div>
  );
} 