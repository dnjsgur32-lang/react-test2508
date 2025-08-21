import Header from './comp1/Header';
import Footer from './comp1/Footer';
import Contents from './comp1/Contents';
import Popup from './comp1/Popup';
import Slider from './comp1/Slider';
import React, { useState, useEffect } from 'react';

function Project1() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 페이지 접속 시 자동으로 팝업 열기
  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Header />
      <Slider />
      <Contents />
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
      <Footer />
    </div>
  );
}

export default Project1;
