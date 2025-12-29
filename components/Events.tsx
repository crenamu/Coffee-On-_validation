import React from 'react';

const Events: React.FC = () => {
  const events = [
    { 
      title: "모닝 커피 할인", 
      desc: "오전 8시 ~ 10시 아메리카노 2,000원 할인", 
      color: "bg-blue-100 text-blue-800",
      icon: "schedule"
    },
    { 
      title: "텀블러 사용", 
      desc: "개인 텀블러 지참 시 500원 즉시 할인", 
      color: "bg-green-100 text-green-800",
      icon: "eco"
    },
    { 
      title: "지역 주민 데이", 
      desc: "매월 1일, 동네 주민 음료 50% 할인 (신분증 지참)", 
      color: "bg-orange-100 text-orange-800",
      icon: "celebration"
    }
  ];

  return (
    <div className="layout-container flex w-full max-w-[1440px] flex-col px-6 md:px-20 lg:px-40 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <div className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Events</div>
          <h2 className="text-3xl md:text-4xl font-black">진행 중인 이벤트</h2>
        </div>
        <a href="#" className="text-text-muted hover:text-primary font-medium flex items-center gap-1">
          전체보기 <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <div key={idx} className="border border-border-light dark:border-border-dark p-8 rounded-3xl hover:border-primary transition-colors cursor-pointer group bg-background-light dark:bg-background-dark">
            <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center mb-6`}>
              <span className="material-symbols-outlined">{event.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
            <p className="text-text-muted">{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;