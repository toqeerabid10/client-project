import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import MainContent from '@/app/components/MainContent';
import Navbar from '@/app/components/Navbar';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Page;
