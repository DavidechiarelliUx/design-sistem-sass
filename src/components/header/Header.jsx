import React, { useState } from "react";

import styles from "./Header.module.scss";

import { FaCaretDown,FaServicestack } from "react-icons/fa6";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItems = [
    {
      id: 1,
      label: "Home",
      items: [
        {
          id: 1,
          label: "Product",
        },
        {
          id: 2,
          label: "Login",
        },
        {
          id: 3,
          label: "Contact",
        },
      ],
    },
    {
      id: 2,
      label: "Product",
      items: [
        {
          id: 1,
          label: "Maglie Uomo",
        },
        {
          id: 2,
          label: "Maglie Donna",
        },
        {
          id: 3,
          label: "Costumi",
        },
      ],
    },
    {
        id: 3,
        label: "Login",
        items: [
          {
            id: 1,
            label: "Sign in",
          },
          {
            id: 2,
            label: "Log in",
          },
        ],
      },
      {
        id: 4,
        label: "Contact",
        items: [
          {
            id: 1,
            label: "Number",
          },
          {
            id: 2,
            label: "Email",
          },
          {
            id: 3,
            label: "Instagram",
          },
        ],
      },
  ];

  const handleOpenMenu = (item) => {
    if (item === openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(item);
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`flex align-items-center justify-content-between`}>
          <div className={styles.logo}><FaServicestack/></div>
          <div className={`${styles.menu} col-6`}>
            <ul className={`${styles.menuItem} flex`}>
              {menuItems?.map((item) => (
                <li
                key={item?.id}
                onClick={() => {
                    handleOpenMenu(item?.id);
                  }}
                  >
                  <div className={styles.menuItem__label}>
                    <span>{item?.label}</span>{" "}
                  <span>
                    <FaCaretDown />
                  </span>
                  </div>
                  <div
                    className={`${styles.menuItem__dropdown} 
                    
                    ${openMenu && openMenu === item?.id ? styles.open : ""}`}
                  >
                    <ul>
                      {item?.items?.map((subItem) => (
                        <li key={subItem?.id}>
                          <span>{subItem?.label}</span>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-3">My account</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
