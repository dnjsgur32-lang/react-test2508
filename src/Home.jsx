import { Link } from 'react-router-dom';
import './Home.css'; // CSS 분리

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">이정현의 프로젝트에 오신 것을 환영합니다</h1>
      <p className="home-subtitle">프로젝트를 선택하세요:</p>

      <div className="project-links">
        <Link to="/project1" className="project-card">
          <h2>프로젝트 1</h2>
          <p>JUST 쇼핑몰</p>
        </Link>
        <Link to="/project2" className="project-card">
          <h2>프로젝트 2</h2>
          <p>예시 프로젝트</p>
        </Link>
        <Link to="/project3" className="project-card">
          <h2>프로젝트 3</h2>
          <p>예시 프로젝트</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
