import React from 'react';

interface HeaderProps {
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light bg-white/90 backdrop-blur-md px-6 py-4 lg:px-40 dark:bg-background-dark/90 dark:border-border-dark">
      <div 
        onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="flex items-center gap-3 text-[#181411] dark:text-white cursor-pointer select-none"
      >
        <div className="flex items-center justify-center text-primary">
          <span className="material-symbols-outlined !text-[32px]">local_cafe</span>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Coffee On</h2>
      </div>
      
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          {[
            { label: '브랜드 스토리', id: 'story' },
            { label: '메뉴', id: 'menu' },
            { label: '이벤트', id: 'events' }
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-[#181411] dark:text-[#e0d9d5] text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button 
          onClick={onOrderClick}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] active:scale-95 duration-200 shadow-md shadow-primary/20"
        >
          <span className="truncate">픽업 주문</span>
        </button>
      </div>
      
      <button className="md:hidden text-[#181411] dark:text-white hover:bg-black/5 rounded-full p-2 transition-colors">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
};

export default Header;