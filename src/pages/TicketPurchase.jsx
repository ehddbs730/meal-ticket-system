import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/ticketPurchase.css';

function TicketPurchase() {
  const navigate = useNavigate();

  const handleStoreClick = () => {
    navigate('/category');
  };

  return (
    <>
      <Navbar />
      <div className="ticket-purchase-container">
        <h1 className="ticket-purchase-title">매장을 선택하세요.</h1>
        <div className="ticket-purchase-list">
          <div className="ticket-purchase-item" onClick={handleStoreClick}>
            <div className="ticket-purchase-img">학생회관 식당 이미지</div>
            <div className="ticket-purchase-label">학생회관 식당</div>
          </div>
          <div className="ticket-purchase-item">
            <div className="ticket-purchase-img">자연계 식당 이미지</div>
            <div className="ticket-purchase-label">자연계 식당</div>
          </div>
          <div className="ticket-purchase-item">
            <div className="ticket-purchase-img">교직원 식당 이미지</div>
            <div className="ticket-purchase-label">교직원 식당</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketPurchase;