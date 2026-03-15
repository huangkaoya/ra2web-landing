import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/ladder-rules.html', destination: '/html/ladder-rules.html' },
      { source: '/patch-notes.html', destination: '/html/patch-notes.html' },
      { source: '/patch-notes-xwol.html', destination: '/html/patch-notes-xwol.html' },
    ];
  },
};

export default nextConfig;
