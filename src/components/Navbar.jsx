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
   
     

       <div className="navbar fixed top-0 left-0 z-50 bg-black/10  backdrop-blur-md mx-1 my-5 sm:px-20 rounded-4xl px-5 shadow">

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
            <Link href="/items" className="text-black">Items</Link>
          </li>

          {isAuth && (
            <li>
              <Link href="/add-item">Add Item</Link>
            </li>
          )}
        </ul>
      </div>

      <Link href="/" className="btn btn-ghost text-xl">
        daisyUI
      </Link>
    </div>

    {/* CENTER */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/items" className="btn text-white">Items</Link>
        </li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="navbar-end gap-3">
      {isAuth ? (
        <>
          <Link
            href="/add-item"
            className="btn hidden lg:inline-flex shadow-none"
          >
            Add Item
          </Link>

          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" className="btn ">
          Login
        </Link>
      )}
    </div>
  </div>
    
  );
}
