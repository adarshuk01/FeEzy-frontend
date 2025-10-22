import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-background-dark border-r border-border-light dark:border-border-dark flex flex-col fixed top-0 left-0 pt-8 pb-4 shadow-xl">
      
      {/* HEADER / LOGO */}
      <div className="mb-8 flex items-center justify-between pl-4 pr-4">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-3xl text-indigo-600 dark:text-indigo-400">
            analytics
          </span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white ml-2">
           FeEzy
          </h1>
        </div>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex flex-col space-y-2 flex-grow px-2">
        <SidebarLink icon="dashboard" text="Dashboard" to="/" />
        <SidebarLink icon="group" text="Customers" to="/customerlist" />
        <SidebarLink icon="calendar_month" text="Attendance" to="/attendance" />
        <SidebarLink icon="subscriptions" text="Subscriptions" to="/subscriptions" />
        <SidebarLink icon="payment" text="Payments" to="/payment" />
      </nav>

      {/* SEPARATOR */}
      <hr className="my-6 border-t border-gray-200 dark:border-gray-700" />

      {/* UTILITY LINKS */}
      <div className="flex flex-col space-y-2 px-2">
        <SidebarLink icon="settings" text="Settings" to="/settings" />
        <SidebarLink icon="logout" text="Logout" to="/logout" />
      </div>
    </aside>
  );
};

// SidebarLink uses NavLink to detect active route
const SidebarLink = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center w-full py-3 px-3 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out gap-3 ${
          isActive
            ? "text-white bg-primary dark:bg-indigo-700 shadow-md"
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-prbg-primary dark:hover:text-indigo-400"
        }`
      }
    >
      <span className="material-symbols-outlined text-lg">{icon}</span>
      <span className="whitespace-nowrap">{text}</span>
    </NavLink>
  );
};

export default Sidebar;
