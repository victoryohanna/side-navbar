import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MenuItems } from "./Menu";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="navbar">
        {toggleMenu ? (
          <Link to="#" className="menu-bars">
            <AiOutlineClose onClick={() => setToggleMenu(false)} />
          </Link>
        ) : (
          <Link to="#" className="menu-bars">
            <FaBars onClick={() => setToggleMenu(true)} />
          </Link>
        )}
      </div>
      {toggleMenu && (
        <div className="nav-menu active scale-up-ver-top">
          <ul className="nav-menu-list">
            {MenuItems.map((item, index) => {
              return (
                <li className={item.itemName} key={index}>
                  <h1>Test</h1>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
