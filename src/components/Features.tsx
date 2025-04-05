"use client";

export default function Features() {
  const featureItems = [
    {
      id: "Card1",
      title: "跨平台",
      description: "几乎在所有的设备上游玩，包括经典的个人电脑、笔记本、MAC、Iphone、安卓手机，甚至电冰箱或者小天才电话手表😂",
      background: "#2c87b9",
      iconUrl: "/img/xplatform-icn.png"
    },
    {
      id: "Card2",
      title: "B-S架构",
      description: "并非局域网联机意味着你可以和全球玩家在线切磋，使用HTTP访问意味着不再有古早即时战略类游戏打联机需要额外的防火墙配置这一场景！",
      background: "#e0890f",
      iconUrl: "/img/network-icn.png"
    },
    {
      id: "Card3",
      title: "现代操作体验",
      description: "在电脑端打开可以体验经典的键盘+鼠标操作，而转到移动端则会自动切换到触摸+按钮+摇杆操作，一套实现，妙不可言。",
      background: "#802c23",
      iconUrl: "/img/modern-icn.png"
    },
    {
      id: "Card4",
      title: "支持外设API和MOD",
      description: "无论是想开发属于自己的摇杆和快捷面板来增强操控体验，还是开发类似\"共和国之辉\"这样风靡华人的经典MOD提升游戏乐趣，都可行且易于上手！",
      background: "#363739",
      iconUrl: "/img/mod-icn.png"
    }
  ];

  return (
    <section 
      id="features" 
      className="py-16 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: 'url("/img/Features-bg.jpg")' }}
    >
      <div className="container mx-auto px-4 max-w-[1100px]">
        <h2 className="text-4xl md:text-[50px] font-normal uppercase font-['Oswald',sans-serif] leading-[60px] text-center mb-8">核心特色</h2>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto mb-12"></div>
        
        <div className="Featureside pt-16 pb-7 w-full">
          <ul className="list-none flex flex-wrap justify-center md:justify-between md:flex-nowrap">
            {featureItems.map((item) => (
              <li 
                key={item.id} 
                className={`text-center w-full md:w-[245px] md:h-[385px] box-border text-shadow mb-8 md:mb-0 mx-2 md:mx-0 shadow-md`}
                style={{ 
                  background: item.background,
                  boxShadow: '1px 4px 7px -4px rgba(0,0,0,0.75)',
                  textShadow: '1px 1px rgba(0,0,0,.5)'
                }}
              >
                <div 
                  className="block pt-[44px] px-2 pb-[161px]"
                >
                  <div 
                    className="bg-no-repeat bg-top bg-contain pb-[138px]" 
                    style={{ backgroundImage: `url('${item.iconUrl}')` }}
                  >
                  </div>
                  <h4 className="text-[18px] font-normal uppercase text-[#d8dfe5]">{item.title}</h4>
                  <p className="text-white text-sm mt-2">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 