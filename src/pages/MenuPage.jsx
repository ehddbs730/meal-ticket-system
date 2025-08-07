import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/menuPage.css';

function MenuPage() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu-detail');
  };

  const handleBackClick = () => {
    navigate('/category');
  };

  return (
    <>
      <Navbar />
      <div className="menu-container">
        <h1 className="menu-title">학생회관 식당 / 한식</h1>
        <div className="menu-divider" />
        <div className="menu-list">
          <button className="menu-item" onClick={handleMenuClick}>
            <span className="menu-item-text">메뉴1</span>
          </button>
          <button className="menu-item" onClick={handleMenuClick}>
            <span className="menu-item-text">메뉴2</span>
          </button>
          <button className="menu-item" onClick={handleMenuClick}>
            <span className="menu-item-text">메뉴3</span>
          </button>
        </div>
        <div className="menu-instruction"></div>
        <button className="menu-back-btn" onClick={handleBackClick}>이전으로</button>
      </div>
    </>
  );
}

export default MenuPage; 