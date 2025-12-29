import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState<{name: string, price: number}[]>([]);

  if (!isOpen) return null;

  const menu = [
    { name: '아메리카노', price: 4500 },
    { name: '카페 라떼', price: 5000 },
    { name: '바닐라 라떼', price: 5500 },
    { name: '크로플', price: 4000 },
  ];

  const addToCart = (item: {name: string, price: number}) => {
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const handleOrder = () => {
    setStep(2);
    setTimeout(() => {
      setStep(1);
      setCart([]);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md h-[600px] flex flex-col bg-white dark:bg-[#221810] rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="p-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-background-light dark:bg-white/5">
          <h3 className="font-bold text-lg">픽업 주문</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-primary">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {step === 1 ? (
          <>
            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {menu.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => addToCart(item)}
                    className="p-4 rounded-xl border border-border-light hover:border-primary hover:bg-orange-50 dark:border-white/10 dark:hover:bg-white/5 text-left transition-all active:scale-95"
                  >
                    <div className="font-bold mb-1">{item.name}</div>
                    <div className="text-sm text-text-muted">{item.price.toLocaleString()}원</div>
                  </button>
                ))}
              </div>

              <div className="border-t border-border-light dark:border-white/10 pt-4">
                <h4 className="font-bold text-sm mb-3 text-text-muted">장바구니</h4>
                {cart.length === 0 ? (
                  <div className="text-center py-8 text-gray-400 text-sm">담긴 메뉴가 없습니다.</div>
                ) : (
                  <ul className="flex flex-col gap-2">
                    {cart.map((item, idx) => (
                      <li key={idx} className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span>{item.price.toLocaleString()}원</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border-light dark:border-border-dark bg-white dark:bg-[#221810]">
              <div className="flex justify-between items-center mb-4 text-xl font-black">
                <span>총 결제금액</span>
                <span className="text-primary">{totalPrice.toLocaleString()}원</span>
              </div>
              <button 
                onClick={handleOrder}
                disabled={cart.length === 0}
                className="w-full rounded-xl bg-primary py-4 font-bold text-white hover:bg-[#c55605] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-lg shadow-primary/20"
              >
                주문하기
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 animate-pulse">
              <span className="material-symbols-outlined text-4xl">local_cafe</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">주문이 접수되었습니다!</h3>
            <p className="text-text-muted mb-8">준비가 완료되면 진동벨(알림톡)로 알려드립니다.<br/>잠시만 기다려주세요.</p>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
               <div className="bg-primary h-full w-full animate-[wiggle_1s_ease-in-out_infinite]" style={{width: '60%'}}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;