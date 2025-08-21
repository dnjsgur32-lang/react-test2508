import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [slide1, slide2, slide3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider-container" style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
            <div 
                className="slider" 
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    height: '100%'
                }}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        style={{
                            minWidth: '100%',
                            height: '100%',
                            backgroundImage: `url(${slide})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                ))}
            </div>
            
            <div className="slider-dots" style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '10px'
            }}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            border: 'none',
                            background: currentSlide === index ? '#fff' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;