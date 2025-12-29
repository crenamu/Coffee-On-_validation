import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="layout-container flex w-full max-w-[1440px] flex-col px-6 md:px-20 lg:px-40 py-20 bg-white dark:bg-[#1e1611]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span className="text-primary">500명 이상</span>의 동네 단골이<br/>
            증명하는 찐 맛집
          </h2>
          <div className="flex items-center gap-2">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1e1611] overflow-hidden bg-gray-200">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover"/>
                    </div>
                ))}
             </div>
             <span className="font-bold text-text-muted ml-2">재방문율 85% 달성</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
            <div className="flex text-yellow-400 mb-1">
                {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined filled">star</span>)}
            </div>
            <p className="font-bold text-lg">4.9 / 5.0 (Google Review)</p>
        </div>
      </div>

      {/* Masonry-style Grid for Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Review 1 */}
        <div className="bg-background-light dark:bg-white/5 p-6 rounded-3xl h-fit">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://i.pravatar.cc/100?img=32" alt="User" className="w-10 h-10 rounded-full"/>
            <div>
              <p className="font-bold text-sm">이수민</p>
              <p className="text-xs text-text-muted">프리랜서 디자이너</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            "작업하기 정말 좋은 환경이에요. 와이파이도 빠르고 콘센트도 자리마다 있어서 배터리 걱정 없이 일합니다."
          </p>
        </div>

        {/* Review 2 (PEAK - Highlighted) */}
        <div className="bg-[#181411] text-white p-8 rounded-3xl shadow-xl transform md:scale-105 z-10 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">format_quote</span>
           </div>
           <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">BEST REVIEW</span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-relaxed">
                 "다른 카페 다 다녀봤지만<br/>결국 여기로 돌아옵니다."
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                 프랜차이즈의 시끄러운 소음이 없어서 집중이 너무 잘 돼요. 
                 커피 가격도 10% 할인받으니 부담 없고, 사장님이 직접 로스팅하셔서 그런지 커피 맛이 확실히 다릅니다. 
                 강아지와 함께 갈 수 있는 것도 큰 장점이에요!
              </p>
              <div className="flex items-center gap-3 border-t border-white/20 pt-4">
                <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-12 h-12 rounded-full border-2 border-primary"/>
                <div>
                  <p className="font-bold">박준형</p>
                  <p className="text-xs text-gray-400">서초동 3년 거주</p>
                </div>
              </div>
           </div>
        </div>

        {/* Review 3 */}
        <div className="bg-background-light dark:bg-white/5 p-6 rounded-3xl h-fit">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://i.pravatar.cc/100?img=44" alt="User" className="w-10 h-10 rounded-full"/>
            <div>
              <p className="font-bold text-sm">최지우</p>
              <p className="text-xs text-text-muted">대학생</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            "시험 기간에 항상 찾는 곳입니다. 눈치 안 보고 공부할 수 있고 음료도 맛있어요. 크로플 강추합니다!"
          </p>
        </div>
      </div>

      {/* End Rule: Reassuring Closing Message */}
      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 md:p-8 text-center border border-primary/20">
         <p className="font-bold text-lg md:text-xl text-[#181411] dark:text-white mb-2">
            아직 고민되시나요?
         </p>
         <p className="text-text-muted mb-0">
            첫 방문 시 <span className="text-primary font-bold">아메리카노 무료 사이즈업</span> 혜택을 드립니다.<br className="md:hidden"/>
            부담 없이 들러서 차이를 경험해보세요.
         </p>
      </div>
    </div>
  );
};

export default SocialProof;