"use client";

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('news');
  
  return (
    <section 
      id="about" 
      className="py-16 bg-white text-gray-800"
    >
      <div className="container mx-auto px-4 max-w-[1100px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">关于红色井界™</h2>
        <p className="text-center max-w-3xl mx-auto mb-4 text-gray-600">
          红色井界™当前是 <strong>Chronodivide</strong> 的镜像运营站点。<strong>Chronodivide</strong> 
          是首个完全基于网页技术开发的、对标知名即时战略游戏 《红色警戒2》 的游戏引擎，
          具有完全知识产权的闭源项目，人们称其为"网页红警"，深受全球20余万用户喜爱。
        </p>
        <p className="text-center max-w-3xl mx-auto mb-4 text-gray-600">
          红色井界™致力于提升 <strong>Chronodivide</strong> 
          在全平台的用户体验，贡献了中文翻译、移动端快捷面板（摇杆、快捷键等）等功能，极大提升了大中华区玩家游戏体验，并协助 <strong>Chronodivide</strong> 
          共同打击盗版和持续净化游戏生态。
        </p>
        <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600">
          <strong>Chronodivide</strong> 的终极目标是打造跨平台的即时战略类游戏引擎，当前已经初步证明了这一点。真诚欢迎各位有志之士一同参与社区建设，共同促进社区繁荣！
        </p>
        
        <div className="w-64 h-1 bg-[#ff9408] mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <ul className="inline-flex">
              <li className="inline-block">
                <button
                  className={`text-[18px] font-normal px-10 py-3.5 uppercase transition-colors cursor-pointer ${
                    activeTab === 'news'
                      ? 'bg-[#ff9408] text-white border border-[#ff9408]'
                      : 'text-[#989898] border border-gray-300 hover:bg-[#ff9408] hover:text-white hover:border-[#ff9408]'
                  }`}
                  onClick={() => setActiveTab('news')}
                >
                  新闻
                </button>
              </li>
              <li className="inline-block -ml-[2px]">
                <button
                  className={`text-[18px] font-normal px-10 py-3.5 uppercase transition-colors cursor-pointer ${
                    activeTab === 'specs'
                      ? 'bg-[#ff9408] text-white border border-[#ff9408]'
                      : 'text-[#989898] border border-gray-300 hover:bg-[#ff9408] hover:text-white hover:border-[#ff9408]'
                  }`}
                  onClick={() => setActiveTab('specs')}
                >
                  配置要求
                </button>
              </li>
            </ul>
          </div>
          
          <div className="tab-content pb-16">
            {activeTab === 'news' && (
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-[43.63%] mb-10 md:mb-0 md:float-left">
                  <div className="relative ml-0 md:ml-6">
                    <img 
                      src="/img/lobby-main.jpg" 
                      alt="游戏大厅" 
                      className="shadow-lg border border-[#ececec] bg-white p-2.5"
                    />
                  </div>
                </div>
                <div className="md:w-[54.3%] md:float-right text-left">
                  <h3 className="text-2xl md:text-[24px] font-bold uppercase text-black leading-7">开发进展<span className="block text-sm font-normal text-[#ff9000] mt-1">持续更新中……</span></h3>
                  <p className="pt-7 pb-5 text-[#979797] leading-6">当前已经支持联机、单机，游戏地图持续增加中，并支持游玩自定义地图，而且可以免费查看对战录像回放。</p>
                  <p className="text-[#979797] leading-6">
                    你可以在 <a href="/patch-notes" className="text-[#ff9408] hover:text-[#ff9408] hover:underline">此处</a> 
                    查看游戏更新的最新情报，或者微信关注公众号 思牛逼 获取各类周边资讯（包括加速器、攻略、QQ群等）。
                  </p>
                </div>
                <div className="clear-both"></div>
              </div>
            )}
            
            {activeTab === 'specs' && (
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-[43.63%] mb-10 md:mb-0 md:float-left">
                  <div className="relative ml-0 md:ml-6">
                    <img 
                      src="/img/lobby-main.jpg" 
                      alt="游戏大厅" 
                      className="shadow-lg border border-[#ececec] bg-white p-2.5"
                    />
                  </div>
                </div>
                <div className="md:w-[54.3%] md:float-right text-left">
                  <h3 className="text-2xl md:text-[24px] font-bold uppercase text-black leading-7">建议游戏配置</h3>
                  <ul className="list-disc pl-5 text-[#979797] pt-7 space-y-4">
                    <li>CPU: Intel Atom Z3700+ @1.33GHz (安卓、苹果等建议使用2018年及之后的新设备)</li>
                    <li>OS: 64位操作系统 (并且需要支持能打开浏览器)</li>
                    <li>Memory: 4GB (如果更大则更好)</li>
                    <li>GPU: Intel HD Graphics (安卓、苹果等建议使用2018年及之后的新设备)</li>
                    <li>分辨率: 1024x768 最低</li>
                    <li>浏览器: 最新版本的 Google Chrome, Mozilla Firefox, Microsoft Edge or Safari (尽可能避免使用 Firefox)</li>
                  </ul>
                </div>
                <div className="clear-both"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 