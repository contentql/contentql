"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const Footer1 = () => {
  const footer1DemoData = {
    _id: 1,
    title: "Newsletter",
    label: "Enter your email address",
    buttonName: "Subscribe",
    sections: [
      {
        _id: 1,
        title: "Services",
        navItems: ["Branding", "Design", "Marketing", "Advertisement"],
      },
      {
        _id: 2,
        title: "Company",
        navItems: ["About us", "Contact", "Jobs", "Press kit"],
      },
      {
        _id: 3,
        title: "Legal",
        navItems: ["Terms of use", "Privacy policy", "Cookie policy"],
      },
    ],
  };

  const footer1Data = useQuery(api.footer1.get) || footer1DemoData;

  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      {footer1Data.sections.map((navItem, index) => (
        <nav key={index}>
          <header className="footer-title">{navItem.title}</header>
          {navItem.navItems.map((link, linkIndex) => (
            <a key={linkIndex} className="link link-hover">
              {link}
            </a>
          ))}
        </nav>
      ))}
      <form>
        <header className="footer-title">{footer1Data.title}</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">{footer1Data.label}</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">
              {footer1Data.buttonName}
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer1;
