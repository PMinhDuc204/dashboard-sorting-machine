import React, { useContext } from 'react';
import { UserContext } from '@/contexts/useContext';
import { Navigate, Outlet } from 'react-router-dom';

const GuestRoute = () => {
  const { token } = useContext(UserContext);

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default GuestRoute;