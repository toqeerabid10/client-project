import React from 'react';
import './layout.css';
import Sidebar from '../componentstwo/Sidebar';
import Header from '../componentstwo/Header';
import Content from '../componentstwo/lists';
import Footer from '../componentstwo/Footer';

const ListPage = () => {
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

export default ListPage;
