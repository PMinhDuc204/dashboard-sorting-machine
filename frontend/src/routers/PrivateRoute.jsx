import { UserContext } from '@/contexts/useContext';
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { user, token } = useContext(UserContext);
  
  if (!token) {
    return <Navigate to="/auth/login" />
  }

  return (
    <Outlet />
  )
}

export default PrivateRoute;