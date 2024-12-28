import { useState } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";
import HamburgerMenu from "../HamburgerMenu";

type HeaderProps = {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between h-[52px] bg-blue-300 ss:bg-blue-900 text-white">
      <HamburgerMenu menuOpen={menuOpen} onClickMenuOpen={setMenuOpen} />
      <h1 className="flex items-center cursor-default">{title}</h1>
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
    </header>
  );
}
