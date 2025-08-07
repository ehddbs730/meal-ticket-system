import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/Navbar';
import LoginSection from './pages/LoginSection';
import StudentLogin from './pages/StudentLogin';
import AdminLogin from './pages/AdminLogin';
import TicketPurchase from './pages/TicketPurchase';
import CategoryPage from './pages/CategoryPage';
import MenuPage from './pages/MenuPage';
import MenuDetailPage from './pages/MenuDetailPage';
import PaymentPage from './pages/PaymentPage';
import PaymentCompletePage from './pages/PaymentCompletePage';
import MyTicketPage from './pages/MyTicketPage';
import AdminPage from './pages/AdminPage';
import AdminCategoryManage from './pages/AdminCategoryManage';
import AdminMenuManage from './pages/AdminMenuManage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <main className="main-content">
              <LoginSection />
            </main>
          } />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/ticket-purchase" element={<TicketPurchase />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-detail" element={<MenuDetailPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-complete" element={<PaymentCompletePage />} />
          <Route path="/my-ticket" element={<MyTicketPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin-category-manage" element={<AdminCategoryManage />} />
          <Route path="/admin-menu-manage" element={<AdminMenuManage />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
