"use client";

export default function Play() {
  return (
    <section 
      id="play" 
      className="text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/img/Get-bg.jpg")' }}
    >
      <div className="Center container mx-auto max-w-[1100px] text-center py-28">
        <h2 className="text-5xl md:text-[57px] font-normal uppercase leading-[60px] font-['Oswald',sans-serif]">现在开玩</h2>
        <p className="py-6"></p>
        <div className="w-64 h-[2px] bg-[#ff9408] mx-auto"></div>
        <div className="py-6">
          <a 
            href="https://game.ra2web.com/" 
            target="_blank" 
            rel="nofollow" 
            className="launch_game inline-block"
          >
            <span className="logo block w-[316px] h-[150px] bg-[url('/img/cd-logo.png')] bg-no-repeat mx-auto my-6 hover:filter hover:brightness-110 hover:drop-shadow-[0_0_20px_red] transition-all"></span>
          </a>
        </div>
      </div>
      <footer className="w-full text-center bg-black/60">
        <div className="Cntr max-w-[1100px] py-7 mx-auto">
          <p className="footer-links text-[#a9abad] text-[13px]">
            <a href="/privacy" className="text-[#a9abad] hover:text-white no-underline" rel="nofollow">隐私政策</a> |
            <a href="/cookies" className="text-[#a9abad] hover:text-white no-underline" rel="nofollow">Cookie政策</a> |
            <a href="/tos" className="text-[#a9abad] hover:text-white no-underline" rel="nofollow">服务条款</a> |
            <a href="mailto:contact@chronodivide.com" className="text-[#a9abad] hover:text-white no-underline" rel="nofollow">联系我们</a>
          </p>
          <br />
          <p className="text-[13px] text-[#a9abad]">法律声明：RA2WEB® 是 RA2WEB LTD 的注册商标，红色井界™ 王二火大™ 网页红井™ 及 "红围巾鸟"卡通形象 是 RA2WEB LTD 的商标，受法律保护。红色警戒®是美国艺电公司的注册商标，受法律保护，页面展示仅用于说明背景，无侵权意图。游戏为非盈利作品，使用部分红色警戒®美术素材，无侵权意图，目前正在逐步替换中。</p>
          <p className="text-[13px] text-[#a9abad]">Copyright © 2025 RA2WEB</p>
        </div>
      </footer>
    </section>
  );
} 