import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout';
import Inputs from '@/components/Inputs/Inputs';
import { FaFacebook, FaGithub  } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { UserContext } from '@/contexts/useContext';
import axiosInstance from '@/utils/axiosInstance';
import { API_PATHS } from '@/utils/apiPaths';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setUser, setToken, setOpenAuthForm } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        setToken(token);
        setUser(response.data.user || response.data);

        if (setOpenAuthForm) {
          setOpenAuthForm(false);
        }
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          const messages = Object.values(error.response.data.errors).flat();
          setError(messages.join("\n"));
        } else if (error.response.data.message) {
          setError(error.response.data.message);
        }
      } else {
        setError(error.message);
      }
    }
  }

  return (
    <AuthLayout>
      <div className="mb-0 w-screen lg:mx-auto lg:w-[500px] relative bg-white rounded-lg shadow-lg shadow-slate-100">
        <div className="!px-10 !py-12 card-body">
          <a href="#" className="">
            <img />
            <img />
          </a>

          <div className="mt-8 text-center">
            <h4 className="mb-1 text-xl text-blue-500/100 dark:text-custom-500">Welcome Back!</h4>
            <p className="text-slate-500 dark:text-zink">Sign in to continue to Test Machine</p>
          </div>

          {error && (
            <div className="mb-4 p-3 text-sm text-red-500 border border-red-200 rounded-md bg-red-50">
              {error}
            </div>
          )}

          <form className="mt-10" onSubmit={handleLogin}>
            <div className="hidden px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50">
              You have <b>successfully</b> signed in.
            </div>
            <div className="mt-3">
              <label htmlFor="" className="inline-block text-base font-medium">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input block w-full rounded-md border border-slate-200 dark:border-zinc-500 px-4 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-zinc-200 disabled:bg-slate-100 dark:disabled:bg-zinc-600 disabled:text-slate-500 dark:disabled:text-zinc-200 focus:outline-none focus:border-sky-400 dark:focus:border-custom-800 dark:text-zinc-100 dark:bg-zinc-700" 
                placeholder="Email" 
              />
            </div>

            <div className="mt-3">
              <Inputs 
                value={password}
                label="Password"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <div className="mt-2 flex items-center gap-2">
                <input type="checkbox" className="border rounded-sm appearance-none size-4 bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400" value=""/>
                <label htmlFor="" className="inline-block text-base font-medium align-middle cursor-pointer">Remember me</label>
              </div>
              <div className="mt-10">
                <button type="submit" className="w-full h-[35px] inline-block rounded-lg text-white bg-blue-500 hover:text-white hover:bg-blue-600">Sign In</button>
              </div>

              <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:border-t-slate-200 dark:before:border-t-zink-500">
                <h5 className="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 dark:bg-zink-600 dark:text-zink-200 rounded relative">Sign In with</h5>
              </div>

              <div className="flex flex-wrap justify-center gap-2">

                <button type="button" className='flex items-center justify-center border border-slate-200 rounded-md size-[37.5px] transition-all duration-200 ease-linear p-0 text-white hover:text-white hover:bg-custom-600'>
                  <FaFacebook className="size-4 text-blue-500" />
                </button>

                <button type="button" className='flex items-center justify-center border border-slate-200 rounded-md size-[37.5px] transition-all duration-200 ease-linear p-0 text-white hover:text-white '>
                  <SiGmail className="size-4 text-[#EA4335]" />
                </button>

                <button type="button" className="flex items-center justify-center size-[37.5px] rounded-md bg-black text-white hover:bg-gray-900 transition">
                  <FaXTwitter className="size-4" />
                </button>

                <button className="flex items-center justify-center size-[37.5px] rounded-md bg-[#24292e] text-white hover:bg-black transition-all duration-200">
                  <FaGithub className="size-4" />
                </button>
              </div>

              <div className="mt-10 text-center">
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  Don't have an account?{" "}
                  <Link to="#" className="link">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;