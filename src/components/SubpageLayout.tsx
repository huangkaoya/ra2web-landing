import Link from 'next/link';
import FooterContent from './FooterContent';

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
      <footer className="w-full text-center bg-black/60 text-white">
        <FooterContent />
      </footer>
    </div>
  );
} 