import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/Navbar';
import NewLoginPage from './pages/NewLoginPage';
import TicketPurchase from './pages/TicketPurchase';
import MenuPage from './pages/MenuPage';
import MenuDetailPage from './pages/MenuDetailPage';
import PaymentPage from './pages/PaymentPage';
import PaymentCompletePage from './pages/PaymentCompletePage';
import MyTicketPage from './pages/MyTicketPage';
import AdminPage from './pages/AdminPage';
import AdminMenuManage from './pages/AdminMenuManage';
import QRCodePage from './pages/QRCodePage';
import SignUp from './pages/SignUp';
import KioskMenuPage from './pages/KioskMenuPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<NewLoginPage />} />
          <Route path="/ticket-purchase" element={<TicketPurchase />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-detail" element={<MenuDetailPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-complete" element={<PaymentCompletePage />} />
          <Route path="/my-ticket" element={<MyTicketPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin-menu-manage" element={<AdminMenuManage />} />
          <Route path="/qr-code" element={<QRCodePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/kiosk" element={<KioskMenuPage />} />
          <Route path="/kiosk-menu" element={<KioskMenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
