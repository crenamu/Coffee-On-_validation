import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <div className="layout-container flex w-full max-w-[1440px] flex-col px-6 md:px-20 lg:px-40 py-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 w-full relative">
          <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
             <img 
               src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80" 
               alt="Warm cafe interior" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
             />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-background-light dark:bg-background-dark rounded-full p-4 hidden md:block">
             <img 
               src="https://images.unsplash.com/photo-1511537632536-b7a460582206?auto=format&fit=crop&w=500&q=80"
               alt="Fresh coffee beans"
               className="w-full h-full object-cover rounded-full"
             />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-6">
          <div className="text-primary font-bold tracking-wider uppercase text-sm">Brand Story</div>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            매일 아침,<br/>
            가장 완벽한 로스팅
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            커피온은 단순히 커피를 마시는 공간이 아닙니다. 바쁜 도심 속에서 잠시 멈추어 
            숨을 고를 수 있는 '조용한 쉼표'가 되기를 바랍니다.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-orange-100 text-primary">
                <span className="material-symbols-outlined">temp_preferences_eco</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">직접 로스팅</h3>
                <p className="text-sm text-text-muted">매일 아침 매장에서 직접 볶은 신선한 원두만을 사용합니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-orange-100 text-primary">
                <span className="material-symbols-outlined">sound_detection_dog_barking</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">펫 프렌들리</h3>
                <p className="text-sm text-text-muted">사랑하는 반려동물과 함께 편안한 시간을 보내세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-orange-100 text-primary">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">커뮤니티</h3>
                <p className="text-sm text-text-muted">지역 주민들과 소통하며 따뜻한 동네 문화를 만들어갑니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;