import SubpageLayout from '@/components/SubpageLayout';
import Link from 'next/link';
import NewsTag from '@/components/NewsTag';

const API_BASE = 'https://gongheguozhihui-news-api.huangkaoya.workers.dev/api';

async function getNews() {
  try {
    const url = `${API_BASE}/news?limit=20&tag=ra2web`;
    const res = await fetch(url, { 
      cache: 'no-store', // 暂时禁用缓存测试
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; Ra2Web/1.0)'
      }
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Fetch news failed with status ${res.status}: ${errorText}`);
      return [];
    }
    return await res.json();
  } catch (e: any) {
    console.error('Fetch news network error:', e.message);
    return [];
  }
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <SubpageLayout title="新闻中心">
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-normal uppercase font-['Oswald',sans-serif] mb-4">最新动态</h2>
          <div className="w-32 h-[2px] bg-[#ff9408] mx-auto"></div>
        </div>

        <div className="flex flex-col border-t border-gray-100">
          {news.map((item: any) => (
            <Link 
              key={item.id} 
              href={`/news/${item.slug}`}
              className="flex flex-col md:flex-row md:items-center justify-between py-4 px-2 border-b border-gray-100 hover:bg-gray-50 transition-all group rounded-none"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <NewsTag category={item.category || '公告'} />
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#ff9408] transition-colors truncate">
                  {item.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-gray-400 mt-2 md:mt-0 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline italic">作者：{item.author || 'Ra2Web'}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:inline"></span>
                  <span className="font-mono tracking-tight">{new Date(item.published_at).toLocaleDateString()}</span>
                </div>
                <span className="text-[#ff9408] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  阅读全文 →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {news.length === 0 && (
          <div className="text-center py-20 text-gray-400 italic">
            暂无新闻动态
          </div>
        )}
      </div>
    </SubpageLayout>
  );
}

