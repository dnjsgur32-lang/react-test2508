        import React from 'react';
        import product from '../assets/images/product.jpg';
        import shopping from '../assets/images/shopping.jpg';
        import sevice from '../assets/images/sevice.jpg';

        import bannerImage from '../assets/images/banner.jpg';
        import shortcutImage from '../assets/images/shopping2.jpg';


        function Contents({ onNoticeClick }) {
            return (
                <section className='contents'>
                    <div className='notice'>
                        <h2>공지사항</h2>
                        <ul>
                            <li><a href="#" onClick={onNoticeClick}>공지사항1</a></li>
                            <li><a href="#" onClick={onNoticeClick}>공지사항2</a></li>
                            <li><a href="#" onClick={onNoticeClick}>공지사항3</a></li>
                            <li><a href="#" onClick={onNoticeClick}>공지사항4</a></li>
                        </ul>
                    </div>
                    <div className='gallery'>
                        <h2>갤러리</h2>
                        <ul>
                            {/* import한 변수를 src에 사용 */}
                            <li><a href="#"><img src={product} alt="갤러리1" /></a></li>
                            <li><a href="#"><img src={shopping} alt="갤러리2" /></a></li>
                            <li><a href="#"><img src={sevice} alt="갤러리3" /></a></li>
                        </ul>
                    </div>
                    <div className='banner'>
                        <h2>배너</h2>
                        {/* import한 변수를 src에 사용 */}
                        <a href="#"><img src={bannerImage} alt="배너" /></a>
                    </div>
                    <div className='shortcut'>
                        <h2>바로가기</h2>
                        {/* import한 변수를 src에 사용 */}
                        <a href="#"><img src={shortcutImage} alt="바로가기" /></a>
                    </div>
                </section>
            )
        }

        export default Contents;