import React, { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const logo = props.logo;
  const menu = props.menu;

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <header className="header">
      <nav className="navbar">

        <img src={logo} alt="Logo" className="logo" />

        <ul className="nav-menu">
          {menu.map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <a href={item.link || "#"}>{item.title}</a>

              {item.children && !item.mega && activeIndex === index && (
                <ul className="dropdown">
                  {item.children.map((child, i) => (
                    <li key={i}>
                      <a href={child.url}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              )}

              {item.mega && activeIndex === index && (
                <div className="mega-menu">
                  {item.children.map((section, i) => (
                    <div className="mega-column" key={i}>
                      <h4>{section.heading}</h4>
                      <ul>
                        {section.links.map((link, j) => (
                          <li key={j}>
                            <a href={link.url}>{link.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
