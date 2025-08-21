import React, { useState, useEffect } from 'react';
import Header2 from './comp2/Header2';
import Slider2 from './comp2/Slider2';
import Contents2 from './comp2/Contents2';
import Footer2 from './comp2/Footer2';
import Popup2 from './comp2/Popup2';
import './comp2/Project2.css';


function Project2() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        setIsPopupOpen(true);
    }, []);

    return (
        <div>
            <Header2 />
            <Slider2 />
            <Contents2 />
            {isPopupOpen && <Popup2 onClose={() => setIsPopupOpen(false)} />}
            <Footer2 />
        </div>
    )
}

export default Project2