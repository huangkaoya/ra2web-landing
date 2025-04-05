"use client";

import SubpageLayout from '@/components/SubpageLayout';

export default function CookiePolicy() {
  return (
    <SubpageLayout title="Cookie政策">
      <div className="space-y-6">
        <h2 className="text-4xl font-normal uppercase font-['Oswald',sans-serif] mb-8 text-center">红色井界™ Cookie政策</h2>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto mb-12"></div>
        
        <p className="mb-4 text-gray-600">最后更新日期：2024年4月1日</p>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">1. 什么是Cookie？</h3>
            <p>
              Cookie是存储在您计算机或移动设备上的小型文本文件。它们使网站能够记住您的操作和偏好（如登录、语言、字体大小和其他显示偏好）以便您每次访问该网站时不必再次设置这些偏好。
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">2. 我们如何使用Cookie</h3>
            <p className="mb-2">
              我们使用Cookie出于多种目的，包括：
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>保持您的登录状态</li>
              <li>记住您的游戏设置和偏好</li>
              <li>收集关于您如何与我们的网站互动的信息</li>
              <li>提高我们网站的功能和性能</li>
              <li>分析和测量我们网站流量和使用情况</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">3. 我们使用的Cookie类型</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold">必要Cookie</h4>
                <p>这些Cookie对于网站的运行至关重要，您不能在我们的系统中关闭它们。它们通常只是为了响应您的操作而设置，如填写表格、设置您的隐私偏好、登录或购物车功能。</p>
              </div>
              
              <div>
                <h4 className="font-bold">性能Cookie</h4>
                <p>这些Cookie使我们能够统计访问量和流量来源，以便我们可以衡量和改进我们网站的性能。它们帮助我们了解哪些页面最受欢迎和最不受欢迎，以及访问者如何在网站上移动。</p>
              </div>
              
              <div>
                <h4 className="font-bold">功能性Cookie</h4>
                <p>这些Cookie使网站能够提供增强的功能和个性化。它们可能由我们或我们已经添加到页面上的第三方提供商设置。如果您不允许这些Cookie，那么这些服务可能无法正常工作。</p>
              </div>
              
              <div>
                <h4 className="font-bold">定向Cookie</h4>
                <p>这些Cookie可能由我们的广告合作伙伴通过我们的网站设置。这些公司可能使用它们来建立您的兴趣档案，并在其他网站上向您展示相关广告。</p>
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">4. 如何管理Cookie</h3>
            <p className="mb-2">
              大多数网络浏览器允许您通过浏览器设置控制Cookie。您可以：
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>查看您的浏览器中存储的Cookie</li>
              <li>允许或阻止Cookie</li>
              <li>设置浏览器通知您何时收到Cookie</li>
              <li>删除Cookie</li>
            </ul>
            <p className="mt-2">
              请注意，删除或阻止Cookie可能会影响您在我们网站上的体验，某些功能可能无法正常工作。
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold mb-3 text-gray-800">5. 联系我们</h3>
            <p>
              如果您对我们的Cookie政策有任何疑问，请通过contact@chronodivide.com联系我们。
            </p>
          </section>
        </div>
      </div>
    </SubpageLayout>
  );
} 