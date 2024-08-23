// app/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OrganizationSetup from './components/OrganizationSetup';
import InviteMembers from './components/InviteMembers';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="flex justify-between">
            <Link to="/" className="text-white">Setup Organization</Link>
            <Link to="/invite" className="text-white">Invite Members</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<OrganizationSetup />} />
          <Route path="/invite" element={<InviteMembers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
