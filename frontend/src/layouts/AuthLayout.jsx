import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen py-16 lg:py-10 bg-slate-50 dark:bg-gray-900 dark:text-gray-100 font-sans">
        <div className="relative">
            <div className="absolute hidden opacity-50 -top-10 md:block ltr:-left-16 rtl:-right-16">
                <svg viewBox="0 0 125 316" width="125" height="316">
                    <g>
                        <path className="fill-indigo-100/50 dark:fill-indigo-900/50" d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-200/50 dark:fill-indigo-800/50" d="m31.2 229.6l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-300/50 dark:fill-indigo-700/50" d="m39 237.4l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-400/50 dark:fill-indigo-600/50" d="m46.8 245.2l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-500/50 dark:fill-indigo-500/50" d="m54.6 253l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-600/50 dark:fill-indigo-400/50" d="m62.4 260.8l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-700/50 dark:fill-indigo-300/50" d="m70.2 268.6l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-800/50 dark:fill-indigo-200/50" d="m78 276.4l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-900/50 dark:fill-indigo-100/50" d="m85.8 284.2l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-100/50 dark:fill-indigo-900/50" d="m93.6 292l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-200/50 dark:fill-indigo-800/50" d="m101.4 299.8l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-300/50 dark:fill-indigo-700/50" d="m109.2 307.6l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-400/50 dark:fill-indigo-600/50" d="m117 315.3l-1.3-3.1v-315.3l1.3 3.1z" />
                    </g>
                </svg>
            </div>

            <div className="absolute hidden -rotate-180 opacity-50 -bottom-10 md:block ltr:-right-16 rtl:-left-16">
                <svg viewBox="0 0 125 316" width="125" height="316">
                    <g>
                        <path className="fill-indigo-100/50 dark:fill-indigo-900/50" d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-200/50 dark:fill-indigo-800/50" d="m31.2 229.6l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-300/50 dark:fill-indigo-700/50" d="m39 237.4l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-400/50 dark:fill-indigo-600/50" d="m46.8 245.2l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-500/50 dark:fill-indigo-500/50" d="m54.6 253l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-600/50 dark:fill-indigo-400/50" d="m62.4 260.8l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-700/50 dark:fill-indigo-300/50" d="m70.2 268.6l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-800/50 dark:fill-indigo-200/50" d="m78 276.4l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-900/50 dark:fill-indigo-100/50" d="m85.8 284.2l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-100/50 dark:fill-indigo-900/50" d="m93.6 292l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-200/50 dark:fill-indigo-800/50" d="m101.4 299.8l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-300/50 dark:fill-indigo-700/50" d="m109.2 307.6l-1.3-3.1v-315.3l1.3 3.1z" />
                        <path className="fill-indigo-400/50 dark:fill-indigo-600/50" d="m117 315.3l-1.3-3.1v-315.3l1.3 3.1z" />
                    </g>
                </svg>
            </div>
            {children}
        </div>
    </div>
  )
}

export default AuthLayout