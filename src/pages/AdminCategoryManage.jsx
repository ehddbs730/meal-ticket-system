import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/adminCategoryManage.css';

const CATEGORY_LIST = ['한식', '중식', '일식', '분식'];

function AdminCategoryManage() {
  const navigate = useNavigate();
  
  // 체크박스 기본 상태
  const [checked, setChecked] = useState({
    한식: true,
    중식: true,
    일식: true,
    분식: true,
  });
  // 현재 카테고리(오른쪽 영역) - 모든 카테고리 표시
  const [current, setCurrent] = useState(CATEGORY_LIST);

  // 체크박스 변경 이벤트 핸들러
  const handleCheck = (cat) => {
    setChecked(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  // 화살표 버튼 클릭 시 현재 체크된 항목만 오른쪽에 반영
  const handleApply = () => {
    setCurrent(CATEGORY_LIST.filter(cat => checked[cat]));
  };

  // 등록하기 버튼 클릭 시 관리자 메인 페이지로 이동
  const handleRegister = () => {
    navigate('/admin');
  };

  return (
    <>
      <Navbar />
      <div className="admin-cat-container">
        <div className="admin-cat-header">
          <h1 className="admin-cat-title">학생회관 식당 카테고리 관리</h1>
          <button className="admin-cat-add-btn" onClick={handleRegister}>등록하기</button>
        </div>
        <div className="admin-cat-box">
          <div className="admin-cat-list">
            <div className="admin-cat-list-title">전체 카테고리</div>
            {CATEGORY_LIST.map(cat => (
              <label className="admin-cat-item" key={cat}>
                <input
                  type="checkbox"
                  checked={checked[cat]}
                  onChange={() => handleCheck(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
          <div className="admin-cat-arrow">
            <button className="admin-cat-arrow-btn" onClick={handleApply}>&gt;</button>
          </div>
          <div className="admin-cat-list">
            <div className="admin-cat-list-title">현재 카테고리</div>
            {current.length === 0 ? (
              <div className="admin-cat-item admin-cat-current admin-cat-empty">없음</div>
            ) : (
              current.map(cat => (
                <div className="admin-cat-item admin-cat-current" key={cat}>{cat}</div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCategoryManage;
