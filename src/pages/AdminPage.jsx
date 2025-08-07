import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/adminPage.css';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate();

  const handleCategoryManage = () => {
    navigate('/admin-category-manage');
  };
  const handleMenuManage = () => {
    navigate('/admin-menu-manage');
  };

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <h1 className="admin-title">매장을 선택하세요.</h1>
        <div className="admin-content">
          <div className="admin-section">
            <h2 className="section-title">학생회관 식당</h2>
            <div className="restaurant-image">이미지</div>
            <div className="admin-buttons">
              <button className="admin-btn" onClick={handleCategoryManage}>카테고리 관리</button>
              <button className="admin-btn" onClick={handleMenuManage}>학식메뉴 관리</button>
            </div>
          </div>

          <div className="admin-section">
            <h2 className="section-title">자연계 식당</h2>
            <div className="restaurant-image">이미지</div>
            <div className="admin-buttons">
              <button className="admin-btn">카테고리 관리</button>
              <button className="admin-btn">학식메뉴 관리</button>
            </div>
          </div>

          <div className="admin-section">
            <h2 className="section-title">교직원 식당</h2>
            <div className="restaurant-image">이미지</div>
            <div className="admin-buttons">
              <button className="admin-btn">학식메뉴 관리</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage; 