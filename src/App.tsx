import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export const App = () => {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <h1>HomeBase</h1>
    </>
  )
}
