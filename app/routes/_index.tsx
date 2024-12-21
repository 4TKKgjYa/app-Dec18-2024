import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";

export default function Index() {
  return (
    <div className="">
      <header className="flex justify-between bg-red-500 ss:bg-blue-500">
        <h1>My App</h1>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
    </div>
  );
}
