import React, { useState, useEffect, useRef, useContext } from 'react'
import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
import PropTypes from "prop-types";
import { useTheme } from '@/hooks/use-theme';
import { UserContext } from '@/contexts/useContext';
import { useNavigate } from 'react-router-dom';

const Header = ({ collapsed, setCollapsed }) => {
    const { theme, setTheme } = useTheme();
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const dropdownRef = useRef(null);
    const {token, clearToken } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        clearToken();
        navigate("auth/login");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
        <div className="flex items-center gap-x-3">
            <button
                className="btn-ghost size-10"
                onClick={() => setCollapsed(!collapsed)}
            >
                <ChevronsLeft className={collapsed && "rotate-180"} />
            </button>
            <div className="input">
                <Search
                    size={20}
                    className='text-slate-300'
                />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
                />
            </div>
        </div>
        <div className="flex items-center gap-x-3">
            <button
                className="btn-ghost size-10"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <Sun
                    size={20}
                    className="dark:hidden"
                />
                <Moon
                    size={20}
                    className="hidden dark:block"
                />
            </button>
            <button className="btn-ghost size-10">
                <Bell size={20}/>
            </button>
            <div className="relative" ref={dropdownRef}>
                <button 
                    className="size-10 overflow-hidden rounded-full"
                    onClick={() => setDropdownMenu(!dropdownMenu)}
                >
                    <img
                        src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                        alt="user"
                        className="size-full object-cover"
                    />
                </button>
                {dropdownMenu && (
                    <div className="absolute right-0 top-12 z-50 p-4 bg-white rounded-md shadow-md min-w-[14rem] dark:bg-zinc-800">
                        <h6 className="mb-2 text-sm text-gray-500 dark:text-zinc-300">
                            Welcome to ...
                        </h6>
                        <div className="flex gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img 
                                    src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg" 
                                    alt="user" 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <div>
                                <h6 className="mb-1 text-15 dark:text-zinc-100">Admin</h6>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <a href="#" className="block py-1.5 text-gray-600 hover:text-blue-500 dark:text-zinc-200">Profile</a>
                            </li>
                            <li>
                                <button className="block py-1.5 text-gray-600 hover:text-blue-500 dark:text-zinc-200" onClick={handleLogout}>Sign Out</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};