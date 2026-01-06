"use client";

import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-100">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-3 sm:py-5 lg:py-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-4 sm:gap-[40px] h-[42px]">
                            <img
                                src="/logo.png"
                                alt="iFinance"
                                className="w-[120px] sm:w-[157px] h-[42px] object-contain"
                            />
                            <div className="hidden sm:block w-px h-[25px] bg-[#E4E7EC]" />
                        </div>

                        <nav className="hidden lg:flex items-center h-[24px] gap-[40px]">
                            <a href="#" className="menu-item">Эхлэл</a>
                            <a href="#" className="menu-item">Бүтээгдэхүүн</a>
                            <a href="#" className="menu-item">Бидний тухай</a>
                            <a href="#" className="menu-item">Ажлын байр</a>
                            <a href="#" className="menu-item">Холбоо барих</a>
                        </nav>

                        {/*  Hamburger */}
                        <div className="flex items-center gap-2 sm:gap-3">
                          
                            <button
                                className="
                                group flex 
                                items-center justify-center
                                gap-[4px]
                                h-[26px] sm:h-[38px] lg:h-[38px]
                                px-3 sm:px-4 lg:px-[14px]
                                rounded-[999px]
                                text-white
                                text-[11px] sm:text-[12px]
                                font-bold
                                leading-none
                                bg-[linear-gradient(90deg,#AE24FE_0%,#662AED_49.3%,#0026BF_100%)]
                                transition-all duration-300 ease-out
                                hover:scale-[1.03]
                                hover:shadow-[0_8px_24px]
                                ">
                                Үнийн санал
                                <svg
                                    className="transition-transform duration-300 group-hover:translate-x-1w-3 h-3 sm:w-4 sm:h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M4 12H18M18 12L12 6M18 12L12 18"
                                        stroke="white"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                            </button>


                            <button
                                className="lg:hidden inline-flex items-center justify-center text-[#282933]"
                                onClick={() => setOpen(true)}
                                aria-label="Open menu"
                            >
                                <span className="rounded-md p-1 hover:bg-slate-100 transition">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`
          fixed inset-x-0 top-0 z-[60] lg:hidden
          bg-white
          transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
            >
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-4 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                        <img
                            src="/logo.png"
                            alt="iFinance"
                            className="w-[120px] h-[42px] object-contain"
                        />

                        <button
                            className="inline-flex items-center justify-center rounded-xl p-2 text-[#282933] hover:bg-slate-100"
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="px-4 py-10">
                    <nav className="flex flex-col items-center gap-6">
                        <a href="#" className="menu-item" onClick={() => setOpen(false)}>Эхлэл</a>
                        <a href="#" className="menu-item" onClick={() => setOpen(false)}>Бүтээгдэхүүн</a>
                        <a href="#" className="menu-item" onClick={() => setOpen(false)}>Бидний тухай</a>
                        <a href="#" className="menu-item" onClick={() => setOpen(false)}>Ажлын байр</a>
                        <a href="#" className="menu-item" onClick={() => setOpen(false)}>Холбоо барих</a>
                    </nav>
                </div>
            </div>
            <div
                className={`
          fixed inset-0 z-[55] lg:hidden
          bg-black/40 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
                onClick={() => setOpen(false)}
            />
        </>
    );
}
