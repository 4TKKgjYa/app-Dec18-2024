import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";

export default function Index() {
  return (
    <>
      <SignedIn>
        <p>You are signed in!</p>
        <div>
          <p>View your profile here</p>
          <UserButton />
        </div>
        <div>
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <p>You are signed out</p>
        <div>
          <SignInButton>
          <button className="inline-flex h-8 items-center justify-center rounded-md bg-neutral-950 px-4 font-medium text-neutral-50 transition active:scale-110 ">click me</button>
          </SignInButton>
        </div>
        <div>
          <SignUpButton />
        </div>
      </SignedOut>
    </>
  );
}
