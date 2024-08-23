import React from 'react';
import './layout.css';

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">LOGO</div>
    <nav className="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Lists</a></li>
      </ul>
    </nav>
    <div className="search">
      <ul>
        <li>Email Search</li>
        <li>Niche Search</li>
        <li>Review Search</li>
        <li>Media Search</li>
        <li>Podcast Search</li>
      </ul>
    </div>
    <div className="support">
      <ul>
        <li>Docs</li>
        <li>Help</li>
        <li>Book a Call</li>
      </ul>
    </div>
    <div className="trial-limits">
      <p>Trial Limits</p>
      <button>Buy More Credits</button>
    </div>
  </div>
);

const Header = () => (
  <header className="header">
    <h1>Lists</h1>
    <div className="header-actions">
      <input type="search" placeholder="Search" />
      <button>Create List</button>
    </div>
    <div className="user-profile">
      <span>Kiana Bickers</span>
    </div>
  </header>
);

const Content = () => (
  <div className="content">
    <div className="empty-state">
      <img src="/empty-state-image.png" alt="No Outreach" />
      <p>No outreach list yet...</p>
      <p>Initiate your outreach efforts by creating a targeted list for effective communication and engagement.</p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Lead Reach. All rights reserved.</p>
  </footer>
);

const DashboardLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
