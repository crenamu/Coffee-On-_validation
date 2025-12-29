import React from 'react';

interface HeroProps {
  onReserveClick: () => void;
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReserveClick, onOrderClick }) => {
  // Energetic image showing social proof (full cafe)
  const heroImageUrl = "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="layout-container flex w-full max-w-[1440px] flex-col">
      <div className="px-6 md:px-20 lg:px-40 py-16 md:py-24">
        <div className="@container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Text Content - Growth & Differentiation Focus */}
            <div className="flex flex-col gap-8 flex-1 w-full text-left order-2 lg:order-1">
              
              <div className="flex flex-col gap-6">
                 {/* Comparative Headline */}
                <h1 className="text-[#181411] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight break-keep">
                  프랜차이즈보다<br/>
                  <span className="text-primary">더 스마트한 선택</span>,<br/>
                  Coffee On
                </h1>
                
                {/* Quantified Data Subheadline */}
                <p className="text-[#594a42] dark:text-[#b0a69e] text-xl font-medium leading-relaxed max-w-[600px] break-keep">
                  <span className="font-bold text-[#181411] dark:text-white bg-orange-100 dark:bg-orange-900/30 px-1">가격은 30% 더 가볍게</span>, <br className="md:hidden"/>
                  <span className="font-bold text-[#181411] dark:text-white bg-orange-100 dark:bg-orange-900/30 px-1">와이파이는 2배 더 빠르게.</span><br/>
                  동네 주민들이 프랜차이즈 대신 이곳을 찾는 확실한 이유가 있습니다.
                </p>
              </div>

              {/* Differentiation Metrics */}
              <div className="flex flex-wrap gap-4 py-2">
                <div className="flex-1 min-w-[140px] p-4 rounded-2xl bg-white border border-border-light shadow-md dark:bg-white/5 dark:border-white/10 text-center">
                  <div className="text-3xl font-black text-primary mb-1">30%</div>
                  <div className="text-sm font-bold text-text-muted">더 저렴한 가격</div>
                </div>
                <div className="flex-1 min-w-[140px] p-4 rounded-2xl bg-white border border-border-light shadow-md dark:bg-white/5 dark:border-white/10 text-center">
                  <div className="text-3xl font-black text-primary mb-1">2x</div>
                  <div className="text-sm font-bold text-text-muted">더 빠른 와이파이</div>
                </div>
                <div className="flex-1 min-w-[140px] p-4 rounded-2xl bg-white border border-border-light shadow-md dark:bg-white/5 dark:border-white/10 text-center">
                  <div className="text-3xl font-black text-primary mb-1">500+</div>
                  <div className="text-sm font-bold text-text-muted">단골 고객 수</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button 
                  onClick={() => scrollToSection('differentiation')} 
                  className="flex-1 sm:flex-none flex min-w-[240px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-[#181411] hover:bg-[#332a24] dark:bg-white dark:hover:bg-gray-200 dark:text-[#181411] text-white text-lg font-bold shadow-xl transition-all active:scale-95 duration-200 group"
                >
                  <span className="mr-2">비결 확인하고 할인받기</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Image Content - Social Proof Vibe */}
            <div className="w-full lg:w-[50%] order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={heroImageUrl} 
                  alt="Busy cafe with happy customers" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Floating Comparison Card */}
                <div className="absolute top-8 right-8 z-20 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 animate-bounce-slow hidden md:block">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-sm text-gray-500">다운로드 속도</span>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-black text-primary">500</span>
                        <span className="text-sm font-bold text-gray-600 mb-1">Mbps</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-primary w-[90%]"></div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-8 z-20">
                   <div className="bg-[#181411] text-white px-6 py-4 rounded-xl shadow-lg">
                      <p className="font-bold text-lg mb-1">"동네에서 제일 일하기 좋아요"</p>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                        <span>서초동 주민 김OO님</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;