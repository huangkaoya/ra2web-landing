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
          <div className="border-b border-gray-200 mb-8">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'news'
                      ? 'text-[#ff9408] border-[#ff9408]'
                      : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('news')}
                >
                  新闻
                </button>
              </li>
              <li className="mr-2">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === 'specs'
                      ? 'text-[#ff9408] border-[#ff9408]'
                      : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('specs')}
                >
                  配置要求
                </button>
              </li>
            </ul>
          </div>
          
          <div className="tab-content">
            {activeTab === 'news' && (
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img src="/img/lobby-main.jpg" alt="游戏大厅" className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">开发进展<span className="block text-sm font-normal text-[#ff9408]">持续更新中……</span></h3>
                  <p className="mb-4 text-gray-600">当前已经支持联机、单机，游戏地图持续增加中，并支持游玩自定义地图，而且可以免费查看对战录像回放。</p>
                  <p className="text-gray-600">
                    你可以在 <a href="/patch-notes" className="text-[#ff9408] hover:text-[#ff9408] hover:underline">此处</a> 
                    查看游戏更新的最新情报，或者微信关注公众号 思牛逼 获取各类周边资讯（包括加速器、攻略、QQ群等）。
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'specs' && (
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <img src="/img/lobby-main.jpg" alt="游戏大厅" className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">建议游戏配置</h3>
                  <ul className="space-y-2 list-disc pl-5 text-gray-600">
                    <li>CPU: Intel Atom Z3700+ @1.33GHz (安卓、苹果等建议使用2018年及之后的新设备)</li>
                    <li>OS: 64位操作系统 (并且需要支持能打开浏览器)</li>
                    <li>Memory: 4GB (如果更大则更好)</li>
                    <li>GPU: Intel HD Graphics (安卓、苹果等建议使用2018年及之后的新设备)</li>
                    <li>分辨率: 1024x768 最低</li>
                    <li>浏览器: 最新版本的 Google Chrome, Mozilla Firefox, Microsoft Edge or Safari (尽可能避免使用 Firefox)</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 