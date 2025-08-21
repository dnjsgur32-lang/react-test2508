import React from 'react';
import { GiCabbage } from 'react-icons/gi';

function Header2() {
    return (
        <header>
            <div>
                <div className='logo'>
                    <GiCabbage size={40} color="#d9534f"/>
                </div>
                <nav className='main-menu'>
                    <ul className='depth1'>
                        <li><a href="#">김치소개</a></li>
                        <li><a href="#">체험프로그램</a></li>
                        <li><a href="#">커뮤니티</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header2;