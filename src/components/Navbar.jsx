"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "@/lib/auth";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsAuth(isAuthenticated());
  }, [pathname]);

  const handleLogout = () => logout();

  return (
   
     

       <div className="navbar fixed top-0 left-0 z-50 bg-[#30364F]/40 backdrop-blur-[6px] mx-1 my-5 sm:px-20 rounded-4xl px-5 shadow">

    {/* LEFT */}
    <div className="navbar-start">
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow "
        >
          <li>
            <Link href="/items" className="btn rounded-full hidden lg:inline-flex shadow-none hover:bg-[#F0F0DB] border-none bg-[#E1D9BC] text-[#30364F">Items</Link>
          </li>

          {isAuth && (
            <li>
              <Link href="/add-item" className="btn border-none">Add Item</Link>
            </li>
          )}
        </ul>
      </div>

      <Link href="/" className="font-semibold text-xl border-none ">
        Category <span className="font-bold text-[#1E2939] ">X</span> 
      </Link>
    </div>

    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/items" className="btn rounded-full hidden lg:inline-flex hover:bg-[#F0F0DB] border-none bg-[#E1D9BC] text-[#30364F] shadow">Items</Link>
        </li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="navbar-end gap-3">
      {isAuth ? (
        <>
          <Link
            href="/add-item"
            className="btn rounded-full hidden lg:inline-flex hover:bg-[#F0F0DB] border-none bg-[#E1D9BC] text-[#30364F] shadow-2xl"
          >
            Add Item
          </Link>

          <button onClick={handleLogout} className="btn border-none bg-[#E1D9BC] rounded-full hover:bg-[#F0F0DB] text-[#30364f]">
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" className="btn border-none rounded-full bg-[#E1D9BC] text-[#30364F] ">
          Login
        </Link>
      )}
    </div>
  </div>
    
  );
}
