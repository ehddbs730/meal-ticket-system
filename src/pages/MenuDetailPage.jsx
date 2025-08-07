import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/menuDetailPage.css';

function MenuDetailPage() {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/menu');
  };

  const handlePurchase = () => {
    navigate('/payment');
  };

  return (
    <>
      <Navbar />
      <div className="menu-detail-container">
        <h1 className="menu-detail-title">학생회관 식당 / 한식</h1>
        <div className="menu-detail-content">
          <div className="menu-detail-info">
            <h2 className="menu-detail-name">김치 치즈 돈까스</h2>
            <div className="menu-detail-photo">
              <div className="photo-placeholder">음식 사진</div>
            </div>
          </div>
          <div className="menu-detail-sidebar">
            <div className="purchase-history">
              <h3 className="history-title">시간대별 음식 구매 내역</h3>
              <div className="history-graph">
                <div className="graph-placeholder">그래프 들어갈 위치</div>
              </div>
            </div>
            <div className="ticket-info">
              <div className="ticket-count">잔여 식권 N장</div>
              <div className="menu-price">6500원</div>
            </div>
            <div className="menu-detail-buttons">
              <button className="menu-detail-back-btn" onClick={handleBack}>
                이전으로
              </button>
              <button className="menu-detail-purchase-btn" onClick={handlePurchase}>
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuDetailPage; 