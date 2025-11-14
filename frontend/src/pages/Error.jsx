import { HomeIcon } from 'lucide-react'
import React from 'react'
import  error404  from "@/assets/images/error-404.png";

const Error = () => {
  return (
    <div className='flex items-center justify-center min-h-screen py-16 bg-cover bg-auth-pattern dark:bg-auth-pattern-dark font-public bg-white/70 dark:bg-zink-500/70'>
        <div className="mb-0 border-none shadow-none lg:w-[500px] card bg-white/70 dark:bg-zink-500/70">
            <div className="!px-10 !py-12 card-body">
                <a href="#" className="index-1.html">
                    <img src="" alt="" className="hidden dark:hidden" />
                    <img src="" alt="" className="hidden dark:block" />
                </a>
                <div className="mt-10">
                    <img src={error404} alt="" className="h-64 mx-auto" />
                </div>
                <div className="mt-8 text-center">
                    <h4 className="mb-2 text-purple-500">OPPS, PAGE NOT FOUND</h4>
                    <p className="mb-6 text-slate-500 dark:text-zink-200">It will be as straightforward as Occidental; in fact, it will be just like Occidental to an English speaker.</p>
                    <a href="#" className="text-white transition-all duration-200 ease-linear btn bg-blue-500/100 border-blue-500/100 hover:bg-blue-600 hover:border-blue-600 hover:text-white focus:text-white">
                        <HomeIcon size={20} />
                        <span className="align-middle">Back to Home</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error