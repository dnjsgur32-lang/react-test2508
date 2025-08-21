        import React, { useState } from 'react'
        import './App.css'
        import Header from './comp1/Header';
        import Slider from './comp1/Slider';
        import Contents from './comp1/Contents';
        import Footer from './comp1/Footer';
        import Popup from './comp1/Popup';

        function App() {
          const [isPopupOpen, setIsPopupOpen] = React.useState(false);

          const handleNoticeClick = (e) => {
            e.preventDefault();
            setIsPopupOpen(true);
          };

          const handleClosePopup = () => {
            setIsPopupOpen(false);
          };

          return (
            <div id='root'>
              <Header />
              <Slider />
              <Contents onNoticeClick={handleNoticeClick}/>
              <Footer />
              {isPopupOpen && <Popup onClose={handleClosePopup}/>}
            </div>
          );
        }

        export default App