import { API_PATHS } from '@/utils/apiPaths';
import axiosInstance from '@/utils/axiosInstance';
import React, { Children, createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [openAuthForm, setOpenAuthForm] = useState(false);
    const [notification, _setNotification] = useState('');

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    
    const clearToken = () => {
        _setToken(null);
        localStorage.removeItem('ACCESS_TOKEN');
    }

    const setNotification = message => {
        _setNotification(message);

        setTimeout(() => {
        _setNotification('')
        }, 5000)
    }

    return ( 
    <UserContext.Provider 
    value={{
        user,
        setUser,
        token,
        setToken,
        clearToken,
        notification,
        setNotification,
        openAuthForm,
        setOpenAuthForm
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;