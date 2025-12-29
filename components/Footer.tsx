import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: 'photo_camera', label: 'Instagram' },
    { icon: 'public', label: 'Website' },
    { icon: 'chat_bubble', label: 'Chat' },
  ];

  const footerLinks = [
    '브랜드 스토리',
    '매장 위치',
    '채용',
    '개인정보처리방침',
    '이용약관'
  ];

  return (
    <footer id="footer" className="mt-auto w-full border-t border-solid border-border-light bg-white px-6 py-12 dark:bg-[#1a120c] dark:border-border-dark">
      <div className="mx-auto max-w-[960px] flex flex-col gap-8 text-center">
        
        <div className="flex items-center justify-center gap-2 text-[#181411] dark:text-white mb-4">
          <span className="material-symbols-outlined text-primary text-[28px]">local_cafe</span>
          <span className="text-lg font-bold">Coffee On</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {footerLinks.map((link) => (
            <a 
              key={link}
              href="#" 
              className="text-text-muted hover:text-primary transition-colors text-base font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map((item, index) => (
            <a key={index} href="#" className="group" aria-label={item.label}>
              <div className="flex items-center justify-center size-10 rounded-full bg-background-light dark:bg-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-text-muted hover:scale-110">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              </div>
            </a>
          ))}
        </div>

        <p className="text-text-muted text-sm font-normal">
          © 2024 Coffee On. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;