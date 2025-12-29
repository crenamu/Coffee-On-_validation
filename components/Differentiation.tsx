import React from 'react';

const Differentiation: React.FC = () => {
  return (
    <div className="layout-container flex w-full max-w-[1440px] flex-col px-6 md:px-20 lg:px-40 py-20 bg-background-light dark:bg-background-dark">
      <div className="text-center mb-16">
        <div className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Comparison</div>
        <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
          이웃들이 다른 곳 대신<br/>
          <span className="text-primary">커피온을 선택하는 이유</span>
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          화려한 광고보다 확실한 수치로 증명합니다. <br/>
          합리적인 소비를 지향하는 당신에게 가장 완벽한 공간입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        
        {/* Competitor A */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#2c221b] border border-border-light dark:border-white/5 opacity-70 scale-95 origin-bottom">
          <div className="text-center mb-6">
            <h3 className="font-bold text-xl text-gray-500">대형 프랜차이즈 A</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">아메리카노</p>
              <p className="text-2xl font-bold text-gray-400 line-through">4,500원</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">와이파이 속도</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div className="bg-gray-400 h-2 rounded-full" style={{width: '40%'}}></div>
              </div>
              <p className="font-medium text-gray-500">보통 (100Mbps)</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">콘센트</p>
              <p className="font-medium text-gray-500">일부 좌석만</p>
            </div>
          </div>
        </div>

        {/* Coffee On (Hero Card) */}
        <div className="relative p-8 rounded-3xl bg-white dark:bg-[#1a120c] border-2 border-primary shadow-2xl z-10 transform md:-translate-y-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
            Best Choice
          </div>
          <div className="text-center mb-8">
            <h3 className="font-black text-2xl text-primary flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              Coffee On
            </h3>
          </div>
          <div className="space-y-8">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl">
              <p className="text-sm text-text-muted mb-1 font-bold">아메리카노 + 10% 할인</p>
              <div className="flex items-center gap-3">
                <p className="text-4xl font-black text-[#181411] dark:text-white">4,050원</p>
                <span className="text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded-full">30% SAVE</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-text-muted mb-2 font-bold">와이파이 속도 (Gigabit)</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                <div className="bg-primary h-3 rounded-full relative" style={{width: '95%'}}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow"></div>
                </div>
              </div>
              <p className="font-black text-primary">2배 더 빠름 (500Mbps+)</p>
            </div>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-green-100 rounded-full text-green-700">
                  <span className="material-symbols-outlined text-xl">power</span>
               </div>
               <div>
                 <p className="font-bold">전 좌석 콘센트 완비</p>
               </div>
            </div>
          </div>
        </div>

        {/* Competitor B */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#2c221b] border border-border-light dark:border-white/5 opacity-70 scale-95 origin-bottom">
          <div className="text-center mb-6">
            <h3 className="font-bold text-xl text-gray-500">저가형 카페 B</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">아메리카노</p>
              <p className="text-2xl font-bold text-gray-700">2,000원</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">분위기</p>
              <p className="font-medium text-gray-500">시끄럽고 혼잡함</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">오래 머물기</p>
              <div className="flex items-center gap-1 text-red-400 font-medium">
                <span className="material-symbols-outlined text-sm">block</span>
                눈치 보임
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Differentiation;