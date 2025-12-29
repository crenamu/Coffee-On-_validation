import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white dark:bg-[#221810] rounded-3xl shadow-2xl p-8 transform transition-all animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <span className="material-symbols-outlined">close</span>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">예약이 완료되었습니다!</h3>
            <p className="text-text-muted">확인 문자를 발송해 드렸습니다.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-2">좌석 예약하기</h3>
            <p className="text-text-muted text-sm mb-6">원하시는 시간대에 편안한 자리를 미리 준비해드립니다.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-text-muted">이름</label>
                <input required type="text" className="w-full rounded-xl border-border-light bg-background-light px-4 py-3 focus:border-primary focus:ring-primary dark:bg-white/5 dark:border-white/10" placeholder="홍길동" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-text-muted">연락처</label>
                <input required type="tel" className="w-full rounded-xl border-border-light bg-background-light px-4 py-3 focus:border-primary focus:ring-primary dark:bg-white/5 dark:border-white/10" placeholder="010-0000-0000" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold mb-1 text-text-muted">날짜</label>
                  <input required type="date" className="w-full rounded-xl border-border-light bg-background-light px-4 py-3 focus:border-primary focus:ring-primary dark:bg-white/5 dark:border-white/10" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold mb-1 text-text-muted">시간</label>
                  <input required type="time" className="w-full rounded-xl border-border-light bg-background-light px-4 py-3 focus:border-primary focus:ring-primary dark:bg-white/5 dark:border-white/10" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-text-muted">인원</label>
                <select className="w-full rounded-xl border-border-light bg-background-light px-4 py-3 focus:border-primary focus:ring-primary dark:bg-white/5 dark:border-white/10">
                  <option>1명</option>
                  <option>2명</option>
                  <option>3~4명</option>
                  <option>5명 이상</option>
                </select>
              </div>
              
              <button type="submit" className="mt-4 w-full rounded-xl bg-primary py-4 font-bold text-white hover:bg-[#c55605] transition-colors shadow-lg shadow-primary/20">
                예약 확정하기
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;