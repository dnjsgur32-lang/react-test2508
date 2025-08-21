        import React from 'react';

        function Popup({ onClose }) {
            return (
                <div className='popup-wrap' style={{ display: 'flex'}}>{}
                    <div className='popup'>
                        <h2>공지사항 팝업</h2>
                        <p>이것은 공지사항 팝업입니다. <br /> 자세한 내용은 여기에 표시됩니다.</p>
                        <button className='close-popup' onClick={onClose}>닫기</button>
                    </div>
                </div>
            );
        };

        export default Popup