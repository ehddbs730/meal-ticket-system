import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/categoryPage.css';

function CategoryPage() {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/menu');
  };

  const handleBackClick = () => {
    navigate('/ticket-purchase');
  };

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">학생회관 식당</h1>
        <div className="category-info-box">
          <span className="category-info-icon">!</span>
          <span className="category-info-text">현재 인기있는 메뉴 정보 공지</span>
        </div>
        <div className="category-list-row">
          <button className="category-item-circle" onClick={handleCategoryClick}>한식</button>
          <button className="category-item-circle" onClick={handleCategoryClick}>중식</button>
          <button className="category-item-circle" onClick={handleCategoryClick}>일식</button>
        </div>
        <button className="category-back-btn" onClick={handleBackClick}>이전으로</button>
      </div>
    </>
  );
}

export default CategoryPage;
