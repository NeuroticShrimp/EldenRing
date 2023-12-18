import "./App.css";
import React, { useState } from "react";
import { IconButton, } from '@radix-ui/themes';
//@ts-ignore

const pages = ["bosses", "ammo", "weapons"];
function Navbar() {
  
  let [isSidebarMinimized, setSidebarMinimized] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarMinimized(!isSidebarMinimized);
  }

  return (
    <div className={`sidebar ${isSidebarMinimized ? 'minimized' : ''}`}>
      <IconButton onClick={toggleSidebar}>
      </IconButton>

      {pages.map((page, index) => (
        <a key={index} href={`/${page}`}>
          {page}
        </a>
      ))}
    </div>
  );
}

export default Navbar;
