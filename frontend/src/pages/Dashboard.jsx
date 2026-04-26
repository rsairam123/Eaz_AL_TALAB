import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="container-custom section-padding">
      <h1 className="text-3xl font-heading font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome, {user?.full_name}!</p>
      <p className="text-sm text-gray-500 mt-2">Role: {user?.role}</p>
    </div>
  );
};

export default Dashboard;

// Made with Bob
