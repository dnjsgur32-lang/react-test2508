        import React from 'react';
        import { SiKakaotalk } from 'react-icons/si';
        import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
        import logoImage from '../assets/images/logo2.jpg';

        function Footer() {
          return (
            <footer style={{ textAlign: 'center', padding: '20px', background: '#222', color: '#fff' }}>
              
              {/* 로고 */}
              <div>
                <img src={logoImage} alt="하단 로고" style={{ width: '120px', marginBottom: '10px' }} />
              </div>

              {/* 저작권 */}
              <p style={{ marginBottom: '10px' }}>
                COPYRIGHT © 2025 JUST SHOPPING MALL ALL RIGHTS RESERVED.
              </p>

              {/* SNS 아이콘 */}
              <div>
                <a href="#" style={{ margin: '0 8px' }}><SiKakaotalk size={30} color="#FEE500" /></a>
                <a href="#" style={{ margin: '0 8px' }}><FaInstagram size={30} color="#E4405F" /></a>
                <a href="#" style={{ margin: '0 8px' }}><FaYoutube size={30} color="#FF0000" /></a>
                <a href="#" style={{ margin: '0 8px' }}><FaTwitter size={30} color="#1DA1F2" /></a>
              </div>

            </footer>
          );
        }

        export default Footer;