import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";

export default function Index() {
  return (
    <>
      <header className="flex justify-between">
        <h1>My App</h1>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
    </>
  );
}
