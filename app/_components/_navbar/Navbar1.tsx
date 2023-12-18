"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Navbar1 = () => {
  const navbar1DemoData = {
    _id: 1,
    title: "Content QL",
    navItems: [
      {
        _id: 1,
        name: "About",
        link: "/about",
      },
      {
        _id: 2,
        name: "Blog",
        link: "/blog",
      },
    ],
  };

  const navbar1Data = useQuery(api.navbar1.get) || navbar1DemoData;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          {navbar1Data.title}
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navbar1Data.navItems.map((navItem) => {
            return (
              <li key={navItem._id}>
                <Link href={navItem.link}>{navItem.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <a className="btn">Login</a>
        <div className="dropdown dropdown-hover dropdown-end md:hidden ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-2  btn-square btn-ghost "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2  shadow bg-base-200 rounded-box w-52"
          >
            {navbar1Data.navItems.map((navItem) => {
              return (
                <li key={navItem._id}>
                  <a>{navItem.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
