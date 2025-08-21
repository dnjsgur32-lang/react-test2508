        import React, { useState } from 'react';
        import logoImage from '../assets/images/logo.jpg';

        function Header() {
            const [isMenuOpen, setIsMenuOpen] = useState(false);

            const handleMouseOver = () => {
                setIsMenuOpen(true);
            };

            const handleMouseOut = () => {
                setIsMenuOpen(false);
            };

            return (
                <header>
                    <div className='header-wrap'>
                        <div className='logo'>
                            <a href="#">
                                <img src={logoImage} alt="JUST 쇼핑몰 로고" />
                            </a>
                        </div>
                        <nav className='main-menu' onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}>
                            <ul className='depth1'>
                                <li><a href="#">탑</a>
                                    <ul className='depth2' style={{ display: isMenuOpen ? 'block' : 'none' }}>
                                        <li><a href="#">블라우스</a></li>
                                        <li><a href="#">티</a></li>
                                        <li><a href="#">셔츠</a></li>
                                        <li><a href="#">니트</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">아우터</a>
                                    <ul className='depth2' style={{ display: isMenuOpen ? 'block' : 'none' }}>
                                        <li><a href="#">자켓</a></li>
                                        <li><a href="#">코트</a></li>
                                        <li><a href="#">가디건</a></li>
                                        <li><a href="#">머플러</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">팬츠</a>
                                    <ul className='depth2' style={{ display: isMenuOpen ? 'block' : 'none' }}>
                                        <li><a href="#">청바지</a></li>
                                        <li><a href="#">짧은바지</a></li>
                                        <li><a href="#">긴바지</a></li>
                                        <li><a href="#">레깅스</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">악세사리</a>
                                    <ul className='depth2' style={{ display: isMenuOpen ? 'block' : 'none' }}>
                                        <li><a href="#">귀고리</a></li>
                                        <li><a href="#">목걸이</a></li>
                                        <li><a href="#">반지</a></li>
                                        <li><a href="#">팔찌</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            )
        }

        export default Header;