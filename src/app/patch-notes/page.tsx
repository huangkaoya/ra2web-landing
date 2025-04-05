import Link from 'next/link';

export default function PatchNotes() {
  const patchNotes = [
    {
      version: "1.0.5",
      date: "2025-03-25",
      changes: [
        "修复了多人游戏中偶尔出现的同步问题",
        "优化了移动设备上的触控操作",
        "增加了新地图：红色峡谷",
        "改进了AI对单位的微操控制"
      ]
    },
    {
      version: "1.0.4",
      date: "2025-02-15",
      changes: [
        "加入了录像回放功能",
        "优化了游戏加载速度",
        "修复了部分单位技能错误的问题",
        "调整了平衡性：弱化了苏联的磁暴坦克，增强了盟军的幻影坦克"
      ]
    },
    {
      version: "1.0.3",
      date: "2025-01-20",
      changes: [
        "增加了自定义游戏设置选项",
        "优化了网络连接稳定性",
        "修复了一些与UI相关的问题",
        "改进了游戏内聊天系统"
      ]
    },
    {
      version: "1.0.2",
      date: "2024-12-12",
      changes: [
        "增加了单人游戏挑战模式",
        "修复了若干崩溃问题",
        "优化了高分辨率下的显示效果",
        "增加了新的成就系统"
      ]
    },
    {
      version: "1.0.1",
      date: "2024-11-10",
      changes: [
        "修复了多个游戏平衡性问题",
        "改进了移动设备上的操作体验",
        "增加了游戏内教程",
        "优化了游戏性能"
      ]
    },
    {
      version: "1.0.0",
      date: "2024-10-01",
      changes: [
        "游戏正式发布",
        "支持跨平台游玩",
        "多人游戏对战功能",
        "单人游戏AI对战",
        "经典红警2单位和建筑"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">红色井界™ 更新日志</h1>
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
          <h2 className="text-3xl font-bold mb-6 text-gray-800">游戏更新记录</h2>
          
          <div className="space-y-10">
            {patchNotes.map((patch, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    版本 {patch.version}
                    <span className="ml-2 text-sm font-normal text-gray-500">({patch.date})</span>
                  </h3>
                  {index === 0 && (
                    <span className="mt-2 md:mt-0 inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      最新版本
                    </span>
                  )}
                </div>
                
                <ul className="list-disc pl-5 space-y-2">
                  {patch.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="text-gray-700">
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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