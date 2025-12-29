import React from 'react';

interface HeroProps {
  onReserveClick: () => void;
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onReserveClick, onOrderClick }) => {
  // Reliable image showing a productive cafe environment
  const heroImageUrl = "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2070&auto=format&fit=crop";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="layout-container flex w-full max-w-[1440px] flex-col">
      <div className="px-6 md:px-20 lg:px-40 py-12 md:py-20">
        <div className="@container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Text Content - Information Hierarchy applied */}
            <div className="flex flex-col gap-8 flex-1 w-full text-left order-2 lg:order-1">
              
              <div className="flex flex-col gap-6">
                 {/* Direct Headline focusing on specific audience and benefit */}
                <h1 className="text-[#181411] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight break-keep">
                  재택근무 & 주민을 위한<br/>
                  <span className="text-primary">조용한 공간</span>, 상시 10% 할인
                </h1>
                
                {/* Pain-Killer Subheadline addressing specific pain points */}
                <p className="text-[#594a42] dark:text-[#b0a69e] text-lg font-medium leading-relaxed max-w-[600px] break-keep">
                  시끄러운 프랜차이즈 카페에서 집중하기 힘드셨나요? <br className="hidden md:block"/>
                  커피온은 눈치 보지 않는 업무 환경과 맛있는 커피를 합리적인 가격에 제공합니다.
                </p>
              </div>

              {/* Miller's Law: 3 Clear Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-border-light shadow-sm dark:bg-white/5 dark:border-white/10">
                  <div className="p-2 bg-gray-100 rounded-full dark:bg-white/10 text-primary">
                    <span className="material-symbols-outlined text-[20px]">do_not_disturb_on</span>
                  </div>
                  <span className="font-bold text-sm leading-tight text-[#181411] dark:text-gray-200">소음 없는<br/>조용한 분위기</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-border-light shadow-sm dark:bg-white/5 dark:border-white/10">
                  <div className="p-2 bg-gray-100 rounded-full dark:bg-white/10 text-primary">
                    <span className="material-symbols-outlined text-[20px]">pets</span>
                  </div>
                  <span className="font-bold text-sm leading-tight text-[#181411] dark:text-gray-200">반려동물<br/>동반 환영</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-border-light shadow-sm dark:bg-white/5 dark:border-white/10">
                  <div className="p-2 bg-gray-100 rounded-full dark:bg-white/10 text-primary">
                    <span className="material-symbols-outlined text-[20px]">wifi</span>
                  </div>
                  <span className="font-bold text-sm leading-tight text-[#181411] dark:text-gray-200">고속 와이파이<br/>& 콘센트</span>
                </div>
              </div>
              
              {/* Fitts's Law: Prominent CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button 
                  onClick={() => scrollToSection('footer')} 
                  className="flex-1 sm:flex-none flex min-w-[240px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-[#181411] hover:bg-[#332a24] dark:bg-white dark:hover:bg-gray-200 dark:text-[#181411] text-white text-lg font-bold shadow-xl transition-all active:scale-95 duration-200 group"
                >
                  <span className="mr-2">매장 위치 & 할인 받기</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">location_on</span>
                </button>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="flex-1 sm:flex-none flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-white border-2 border-border-light hover:border-primary hover:text-primary text-[#181411] text-lg font-bold transition-all dark:bg-transparent dark:border-white/20 dark:text-white dark:hover:border-primary active:scale-95 duration-200"
                >
                  <span>메뉴 보기</span>
                </button>
              </div>
            </div>

            {/* Image Content - Trust building */}
            <div className="w-full lg:w-[50%] order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={heroImageUrl} 
                  alt="Quiet cafe interior suitable for work and reading" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Social Proof Badge */}
                <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                   <div className="bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="size-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" className="w-full h-full object-cover"/></div>
                        <div className="size-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" className="w-full h-full object-cover"/></div>
                        <div className="size-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden flex items-center justify-center text-[10px] font-bold bg-gray-100 text-gray-600">+1k</div>
                      </div>
                      <div>
                        <div className="flex text-yellow-500 text-[16px]">
                          <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="material-symbols-outlined filled" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        </div>
                        <p className="text-xs font-bold text-[#181411]">실제 방문자 리뷰 4.9점</p>
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