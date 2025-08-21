import React from 'react';
import { GiHotMeal, GiCabbage, GiChiliPepper } from 'react-icons/gi';

function Contents2() {
  return (
    <section className="contents2">
      <div className="notice">
        <h2>공지사항</h2>
        <ul>
          <li><a href="#">김치 레시피 공모전</a></li>
          <li><a href="#">체험 프로그램 예약 시작</a></li>
        </ul>
      </div>
      <div className="gallery">
        <h2>갤러리</h2>
        <GiCabbage size={60} color="#d9534f" />
      </div>
      <div className="banner">
        <h2>배너</h2>
        <GiChiliPepper size={60} color="#4CAF50" />
      </div>
      <div className="shortcut">
        <h2>바로가기</h2>
        <GiHotMeal size={60} color="#2196F3" />
      </div>
    </section>
  );
}

export default Contents2;
