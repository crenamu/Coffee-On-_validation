import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Menu from './components/Menu';
import Events from './components/Events';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import OrderModal from './components/OrderModal';

const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-[#181411] dark:text-white">
      <Header onOrderClick={() => setIsOrderOpen(true)} />
      
      <main className="flex-1 flex flex-col items-center w-full">
        <section id="home" className="w-full flex justify-center">
          <Hero 
            onReserveClick={() => setIsReservationOpen(true)} 
            onOrderClick={() => setIsOrderOpen(true)}
          />
        </section>
        
        <section id="story" className="w-full flex justify-center bg-white dark:bg-[#1e1611]">
          <BrandStory />
        </section>

        <section id="menu" className="w-full flex justify-center">
          <Menu onOrderClick={() => setIsOrderOpen(true)} />
        </section>

        <section id="events" className="w-full flex justify-center bg-white dark:bg-[#1e1611]">
          <Events />
        </section>
      </main>

      <Footer />

      {/* Modals */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
      <OrderModal 
        isOpen={isOrderOpen} 
        onClose={() => setIsOrderOpen(false)} 
      />
    </div>
  );
};

export default App;