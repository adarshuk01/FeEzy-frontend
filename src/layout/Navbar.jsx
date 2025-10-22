import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white dark:bg-background-dark border-b border-border-light dark:border-border-dark flex items-center justify-between px-4 h-16 fixed top-0 left-0 right-0 z-20">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="material-symbols-outlined text-2xl text-gray-900 dark:text-white">
          menu
        </span>
      </button>

      {/* Logo / Title */}
      <h1 className="text-lg font-bold text-gray-900 dark:text-white text-center flex-1 md:flex-none">
        
      </h1>

      <div className="w-8"></div>
    </header>
  );
};

export default Navbar;
