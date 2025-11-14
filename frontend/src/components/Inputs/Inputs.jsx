import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Inputs = ({value, onChange, type, placeholder, label}) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <div>
        <label htmlFor="" className="inline-block text-base font-medium">{label}</label>
        <div className="relative">
          <input
              type={
                  type === "password" ? (showPassword ? "text" : "password") : type
              }
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="block w-full rounded-md border border-slate-200 dark:border-zinc-500 px-4 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-zinc-200 disabled:bg-slate-100 dark:disabled:bg-zinc-600 disabled:text-slate-500 dark:disabled:text-zinc-200 focus:outline-none focus:border-sky-400 dark:focus:border-custom-800 dark:text-zinc-100 dark:bg-zinc-700"
          />

          {type === "password" && (
              <>
                  {showPassword ? (
                      <FaRegEye
                          size={20}
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                          onClick={toggleShowPassword}
                      />
                  ) : (
                      <FaRegEyeSlash
                          size={20}
                          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                          onClick={toggleShowPassword}
                      />
                  )}
              </>
          )}
        </div>
    </div>
  )
}

export default Inputs