"use client";

import { useState, useEffect } from 'react';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/img/Slider-img1b.jpg",
      title: "激烈跨海苏盟对决",
      subtitle: "对战实况展示"
    },
    {
      image: "/img/Slider-img3b.jpg",
      title: "安卓平板上畅玩",
      subtitle: "移动端演示（图为摇杆高速移动地图中所以会有重影）"
    },
    {
      image: "/img/Slider-img2b.jpg",
      title: "击败敌人！",
      subtitle: "对战实况展示"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gray-800 text-white" id="home">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Welcome Text */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h3 className="text-4xl font-bold mb-6">欢迎回来, <span className="text-red-500">指挥官！</span></h3>
            <p className="text-xl mb-8">是时候体验和重温真正经典的即时战略游戏玩法…… <br /><br />……居然可以直接在您的浏览器！！</p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.ra2web.com/" 
                target="_blank" 
                rel="nofollow"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                立即开始
              </a>
              <a 
                href="#about"
                className="border border-white hover:border-red-500 hover:text-red-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                更多细节
              </a>
            </div>
          </div>
          
          {/* Right Side - Slider */}
          <div className="lg:w-1/2 w-full relative">
            <div className="slider-container rounded-lg overflow-hidden shadow-2xl relative" style={{ paddingBottom: '56.25%' }}>
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`slider-item transition-opacity duration-1000 absolute inset-0 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-xl font-bold">{slide.title} <span className="text-sm font-normal block">{slide.subtitle}</span></p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider Navigation Dots */}
            <div className="slider-dots flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-red-500' : 'bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 