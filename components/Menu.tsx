import React, { useState } from 'react';

interface MenuProps {
  onOrderClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onOrderClick }) => {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const categories = ['Coffee', 'Non-Coffee', 'Dessert'];

  const menuItems = [
    { 
      id: 1, 
      category: 'Coffee', 
      name: '시그니처 아메리카노', 
      desc: '고소한 견과류 풍미와 묵직한 바디감', 
      price: '4,500', 
      img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      category: 'Coffee', 
      name: '바닐라 빈 라떼', 
      desc: '천연 바닐라 빈으로 만든 수제 시럽', 
      price: '5,500', 
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      category: 'Coffee', 
      name: '크림 아인슈페너', 
      desc: '진한 롱블랙 위에 올라간 쫀득한 수제 크림', 
      price: '6,000', 
      img: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 4, 
      category: 'Dessert', 
      name: '플레인 크로플', 
      desc: '프랑스산 버터의 풍미가 가득한 크로플', 
      price: '4,000', 
      img: 'https://images.unsplash.com/photo-1598023130746-888494c25f75?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 5, 
      category: 'Dessert', 
      name: '얼그레이 스콘', 
      desc: '홍차의 향긋함이 느껴지는 담백한 스콘', 
      price: '3,800', 
      img: 'https://images.unsplash.com/photo-1582035306168-54523e1e5504?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 6, 
      category: 'Non-Coffee', 
      name: '자몽 허니 블랙티', 
      desc: '상큼한 자몽과 달콤한 꿀의 조화', 
      price: '5,800', 
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop' 
    },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="layout-container flex w-full max-w-[1440px] flex-col px-6 md:px-20 lg:px-40 py-20 bg-background-light dark:bg-background-dark">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Menu</h2>
        <p className="text-text-muted">정성을 담아 준비한 커피온의 메뉴를 소개합니다.</p>
        
        <div className="flex justify-center gap-4 mt-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-white/5 text-text-muted hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white dark:bg-[#2c221b] rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-start mb-2 px-2">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <span className="font-bold text-primary">{item.price}원</span>
            </div>
            <p className="text-sm text-text-muted px-2 mb-4 line-clamp-2 min-h-[40px]">{item.desc}</p>
            <button 
              onClick={onOrderClick}
              className="w-full py-3 rounded-xl bg-background-light dark:bg-white/5 hover:bg-primary hover:text-white transition-colors font-bold text-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
              담기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;