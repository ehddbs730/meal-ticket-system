import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/adminMenuManage.css';

const MENU_LIST = ['돼지곰탕', '김치찌개', '육회 비빔밥', '야채 비빔밥'];

function AdminMenuManage() {
  const navigate = useNavigate();
  
  // 체크박스 기본 상태
  const [checked, setChecked] = useState({
    돼지곰탕: true,
    김치찌개: true,
    '육회 비빔밥': true,
    '야채 비빔밥': true,
  });
  // 현재 학식메뉴(오른쪽 영역)
  const [current, setCurrent] = useState(MENU_LIST);

  // 체크박스 변경 이벤트 핸들러
  const handleCheck = (menu) => {
    setChecked(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  // 화살표 버튼 클릭 시 현재 체크된 항목만 오른쪽에 반영
  const handleApply = () => {
    setCurrent(MENU_LIST.filter(menu => checked[menu]));
  };

  // 등록하기 버튼 클릭 시 관리자 메인 페이지로 이동
  const handleRegister = () => {
    navigate('/admin');
  };

  return (
    <>
      <Navbar />
      <div className="admin-menu-container">
        <div className="admin-menu-header">
          <h1 className="admin-menu-title">학생회관 식당 학식메뉴 관리</h1>
          <button className="admin-menu-add-btn" onClick={handleRegister}>등록하기</button>
        </div>
        <div className="admin-menu-box">
          <div className="admin-menu-list">
            <div className="admin-menu-list-title">전체 메뉴</div>
            {MENU_LIST.map(menu => (
              <label className="admin-menu-item" key={menu}>
                <input
                  type="checkbox"
                  checked={checked[menu]}
                  onChange={() => handleCheck(menu)}
                />
                {menu}
              </label>
            ))}
          </div>
          <div className="admin-menu-arrow">
            <button className="admin-menu-arrow-btn" onClick={handleApply}>&gt;</button>
          </div>
          <div className="admin-menu-list">
            <div className="admin-menu-list-title">현재 학식메뉴</div>
            {current.length === 0 ? (
              <div className="admin-menu-item admin-menu-current admin-menu-empty">없음</div>
            ) : (
              current.map(menu => (
                <div className="admin-menu-item admin-menu-current" key={menu}>{menu}</div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminMenuManage;
