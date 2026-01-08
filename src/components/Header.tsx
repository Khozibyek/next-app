"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white shadow-md">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-[167px]">
          <div className="flex h-16 items-center justify-between sm:h-20 lg:h-[102px]">
            {/* Logo */}
            <div className="flex items-center gap-3 sm:gap-[40px]">
              <img
                src="/logo.png"
                alt="iFinance"
                className="h-9 w-[110px] object-contain sm:h-[42px] sm:w-[157px]"
              />
              <div className="hidden h-[25px] w-px bg-[#E4E7EC] sm:block" />
            </div>
            <nav
              className={`fixed inset-x-0 top-0 z-[60] bg-white transition-transform duration-300 ease-out lg:static lg:z-auto lg:flex lg:translate-y-0 lg:bg-transparent ${open ? "translate-y-0" : "-translate-y-full"} `}
            >

              <div className="flex items-center justify-between border-b px-4 py-4 lg:hidden">
                <img src="/logo.png" alt="iFinance" className="h-9 w-[110px]" />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl p-2 hover:bg-slate-100"
                >
                  {open ? <X size={18} /> : <Menu size={26} />}
                </button>
              </div>

              <div className="flex flex-col items-center gap-6 py-10 lg:flex-row lg:gap-8 lg:py-0">
                <a href="#" className="menu-item">
                  Эхлэл
                </a>
                <a href="#" className="menu-item">
                  Бүтээгдэхүүн
                </a>
                <a href="#" className="menu-item">
                  Бидний тухай
                </a>
                <a href="#" className="menu-item">
                  Ажлын байр
                </a>
                <a href="#" className="menu-item">
                  Холбоо барих
                </a>
              </div>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button className="group /* mobile */ /* desktop */ inline-flex h-6 items-center justify-center gap-1 rounded-md bg-[linear-gradient(90deg,#AE24FE_0%,#662AED_49.3%,#0026BF_100%)] px-2 text-[12px] font-medium text-white transition-all hover:scale-[1.03] lg:h-[42px] lg:gap-2 lg:rounded-full lg:px-[16px] lg:text-[16px]">
                <span>Үнийн санал</span>
                <ArrowRight
                  className="hidden h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 lg:inline-block"
                  strokeWidth={1.25}
                />
              </button>

              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#282933] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]/40 focus-visible:ring-offset-2 active:scale-95 lg:hidden"
              >
                <Menu size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/0 transition-opacity lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
    </>
  );
}
