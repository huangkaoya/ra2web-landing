"use client";

export default function Play() {
  return (
    <section id="play" className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">现在开玩</h2>
        <div className="w-20 h-1 bg-white mx-auto mb-12"></div>
        
        <div className="text-center">
          <a 
            href="https://game.ra2web.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-red-600 font-bold text-xl py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <span className="mr-2">立即启动游戏</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <p className="mt-8 text-lg">
            随时随地，畅玩红色井界™！
          </p>
        </div>
      </div>
    </section>
  );
} 