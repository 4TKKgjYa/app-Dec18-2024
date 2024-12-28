import { useEffect } from "react";
import "./style.css"; // CSSファイルをインポート
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";

type HamburgerMenuProps = {
  menuOpen: boolean;
  onClickMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ menuOpen, onClickMenuOpen }: HamburgerMenuProps) => {

  useEffect(() => {
    // オーバーレイ表示中にスクロールを無効化
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <input
        type="checkbox"
        // className="menu-btn"
        id="overlay-input"
        checked={menuOpen}
        onChange={() => onClickMenuOpen(!menuOpen)}
      />
      <label htmlFor="overlay-input" id="overlay-button" aria-label="overlay-button">
        <span></span>
      </label>
      <div id="overlay">
        <ul>
          <li className="userIcon">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="h-[36px] inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </SignInButton>
            </SignedOut>
          </li>
          <li>
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
      </div>
    </>
  );
};

export default HamburgerMenu;
