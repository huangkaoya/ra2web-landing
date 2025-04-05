import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">隐私政策</h1>
            <Link 
              href="/" 
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
            >
              返回主页
            </Link>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">红色井界™ 隐私政策</h2>
          
          <p className="mb-4">最后更新日期：2024年4月1日</p>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-800">1. 引言</h3>
              <p>
                感谢您使用红色井界™！本隐私政策旨在帮助您了解我们如何收集、使用、存储和共享您的个人信息。
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-800">2. 我们收集的信息</h3>
              <p className="mb-2">我们可能会收集以下类型的信息：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>您在注册和使用我们服务时提供的信息，如电子邮件地址、用户名</li>
                <li>游戏数据，如游戏统计数据、游戏进度</li>
                <li>设备信息，如IP地址、浏览器类型、操作系统</li>
                <li>日志数据，如您访问我们服务的时间、所用功能</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-800">3. 我们如何使用信息</h3>
              <p className="mb-2">我们使用收集的信息用于：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>提供、维护和改进我们的服务</li>
                <li>开发新的服务和功能</li>
                <li>理解用户如何使用我们的服务</li>
                <li>监控和分析趋势、使用情况和活动</li>
                <li>检测、调查和预防欺诈行为和违规活动</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-800">4. 信息共享</h3>
              <p>
                我们不会出售您的个人信息。我们仅在以下情况下共享您的信息：
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>当您同意或指示我们这样做时</li>
                <li>与我们的服务提供商和合作伙伴共享，以帮助我们提供服务</li>
                <li>为遵守法律法规</li>
                <li>在我们的组织结构发生变更时，如合并、收购或资产出售</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-800">5. 您的权利</h3>
              <p>
                您有权访问、更正或删除您的个人信息。如需行使这些权利，请通过contact@chronodivide.com联系我们。
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-3 text-gray-800">6. 联系我们</h3>
              <p>
                如果您对本隐私政策有任何疑问，请通过contact@chronodivide.com联系我们。
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            红色井界™ © {new Date().getFullYear()} RA2WEB LTD. 保留所有权利。
          </p>
        </div>
      </footer>
    </div>
  );
} 