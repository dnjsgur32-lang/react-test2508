import React from 'react';

function Popup2({ onClose }) {
  return (
    <div className='popup-wrap' style={{ display: 'flex' }}>
      <div className='popup'>
        <h2>공지사항</h2>
        <p>김치이야기 사이트에 오신 것을 환영합니다!</p>
        <button className='close-popup' onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default Popup2;
