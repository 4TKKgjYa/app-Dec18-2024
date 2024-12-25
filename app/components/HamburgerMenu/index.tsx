import { useState } from "react";
import "./style.css"; // CSSファイルをインポート

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <input
        type="checkbox"
        className="menu-btn"
        id="menu-btn"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label htmlFor="menu-btn" className="menu-icon" aria-label="menu">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li className="top">
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </header>
  );
};

export default HamburgerMenu;
