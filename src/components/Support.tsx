"use client";

export default function Support() {
  return (
    <section id="donate" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <h2 className="text-3xl font-bold text-center mb-4">支持红色井界™</h2>
        <p className="text-center max-w-3xl mx-auto mb-4">
          红色井界™ 能够成功运作离不开 ChronoDivide 的可持续发展，基础设施（服务器、带宽）等都需要不菲的费用来维持运转，您如果觉得好玩，还请为 ChronoDivide 捐款！
        </p>
        <p className="text-center max-w-3xl mx-auto mb-8">
          为了满足跨国资金流动需要，确保捐赠可以透明地支持到 ChronoDivide 作者，我们决定采用加密货币的形式，目前支持BTC、ETH、DOGE三种加密货币，以及支持按月订阅（类似于充电）的Buy Me A Coffee，下方的地址直接为 ChronoDivide 作者账户，您可以在区块链上透明地查看到每一笔捐助。如果您不知道如何操作，可以微信关注公众号 思牛逼 了解加密货币基础知识，再次感谢您的关注和支持！
        </p>
        <div className="w-20 h-1 bg-red-500 mx-auto mb-12"></div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* Buy Me A Coffee */}
          <a 
            href="https://www.buymeacoffee.com/chronodivide" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#ff813f] hover:bg-[#ff9d6a] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
            Buy me a coffee
          </a>
          
          {/* Crypto Donation Buttons */}
          <div className="flex space-x-4">
            <a 
              href="#crypto-btc" 
              className="crypto-button p-2 bg-[#F7931A] rounded-full hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                // 这里可以添加打开模态框的逻辑
                alert('BTC捐赠地址: 1ChronoXXXXXXXXXXXXXXXXXXXXXX');
              }}
            >
              <img src="/img/btc.svg" alt="捐赠比特币" title="捐赠比特币" className="h-12 w-12" />
            </a>
            
            <a 
              href="#crypto-eth" 
              className="crypto-button p-2 bg-[#627EEA] rounded-full hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                // 这里可以添加打开模态框的逻辑
                alert('ETH捐赠地址: 0xChronoXXXXXXXXXXXXXXXXXXXXXX');
              }}
            >
              <img src="/img/eth.svg" alt="捐赠以太坊" title="捐赠以太坊" className="h-12 w-12" />
            </a>
            
            <a 
              href="#crypto-doge" 
              className="crypto-button p-2 bg-[#C2A633] rounded-full hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                // 这里可以添加打开模态框的逻辑
                alert('DOGE捐赠地址: DChronoXXXXXXXXXXXXXXXXXXXXXX');
              }}
            >
              <img src="/img/doge.svg" alt="捐赠狗狗币" title="捐赠狗狗币" className="h-12 w-12" />
            </a>
          </div>
        </div>
        
        {/* You can implement a modal for crypto donation details here */}
      </div>
    </section>
  );
} 