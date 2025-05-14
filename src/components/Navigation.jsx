import React from 'react'

const Navigation = () => {
  return (
    <nav className="px-2 flex h-18 items-center justify-between">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" className="h-10" />
      </div>

      <ul className="flex gap-6 list-none font-medium">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
