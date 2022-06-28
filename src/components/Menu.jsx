import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const MenuItems = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    itemName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    itemName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    itemName: "nav-text",
  },
  {
    title: "Our Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    itemName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    itemName: "nav-text",
  },
  {
    title: "Supports",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    itemName: "nav-text",
  },
];
