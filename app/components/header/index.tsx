import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";

type HeaderProps = {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex justify-between h-[52px] px-2 bg-blue-900 ss:bg-blue-900 text-white">
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
