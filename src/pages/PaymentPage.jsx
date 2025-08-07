import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/paymentPage.css';

function PaymentPage() {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/menu-detail');
  };

  const handlePurchase = () => {
    navigate('/payment-complete');
  };

  return (
    <>
      <Navbar />
      <div className="payment-container">
        <div className="payment-header">
          <h1 className="payment-title">주문 결제</h1>
          <div className="payment-divider"></div>
        </div>
        
        <div className="payment-layout">
          <div className="payment-left">
            <div className="payment-section">
              <h2 className="section-title">구매자 정보</h2>
              <div className="section-divider"></div>
              <div className="info-row">
                <span className="info-label">이름</span>
                <span className="info-value">김이박</span>
              </div>
              <div className="info-row">
                <span className="info-label">날짜</span>
                <span className="info-value">20XX년 00월 00시 00시 00분</span>
              </div>
            </div>

            <div className="payment-section">
              <h2 className="section-title">상품 정보</h2>
              <div className="section-divider"></div>
              <div className="info-row">
                <span className="info-label">이름</span>
                <span className="info-value">김치 치즈 돈까스</span>
              </div>
              <div className="info-row">
                <span className="info-label">금액</span>
                <span className="info-value">6500원</span>
              </div>
              <div className="info-row">
                <span className="info-label">수령 위치</span>
                <span className="info-value">학생회관 식당 00코너</span>
              </div>
            </div>

            <div className="payment-section">
              <h2 className="section-title">결제 방식</h2>
              <div className="section-divider"></div>
              <div className="payment-methods-grid">
                <button className="payment-method-btn active">네이버 페이</button>
                <button className="payment-method-btn">신용카드</button>
                <button className="payment-method-btn empty"></button>
                <button className="payment-method-btn empty"></button>
              </div>
            </div>

            <div className="payment-notice">
              실제 음식이 나오기까지는 시간이 00분 소요될 수 있습니다.
            </div>
          </div>

          <div className="payment-right">
            <div className="payment-summary-box">
              <h2 className="summary-title">결제 금액</h2>
              <div className="summary-content">
                <div className="summary-item">구매 금액</div>
                <div className="summary-item">관련 정보</div>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span className="total-count">총 1건</span>
                <span className="total-amount">6500원</span>
              </div>
              <div className="summary-buttons">
                <button className="summary-purchase-btn" onClick={handlePurchase}>
                  구매하기
                </button>
                <button className="summary-back-btn" onClick={handleBack}>
                  이전으로
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage; 