import { NextRequest, NextResponse } from 'next/server';

const CF_WORKER_URL = 'https://gongheguozhihui-news-api.huangkaoya.workers.dev/api/news';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag');
  const limit = searchParams.get('limit') || '20';
  const status = searchParams.get('status') || 'published';

  try {
    let url = `${CF_WORKER_URL}?status=${status}&limit=${limit}`;
    if (tag) url += `&tag=${tag}`;

    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; Ra2Web/1.0)'
      },
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

