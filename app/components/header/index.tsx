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
    <>
      <h1>{title}</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
