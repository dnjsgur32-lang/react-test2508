import React, { useEffect, useState } from 'react';
import { GiCabbage, GiChiliPepper, GiHotMeal } from 'react-icons/gi';


const Slides = [
    <GiCabbage size={100} color="#4CAF50" key="cabbage" />,
    <GiChiliPepper size={100} color="#E53935" key="pepper" />,
    <GiHotMeal size={100} color="#FF9800" key="meal" />
];

function Slider2() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % Slider2.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='slider-container' style={{ textAlign: 'center', height: '300px' }}>
            {Slider2[current]}
        </div>
    )
}

export default Slider2;