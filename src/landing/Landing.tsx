import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'

const FORCE_REDIRECT_URL = import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL
if (!FORCE_REDIRECT_URL) throw new Error('Missing force redirect URL')

export const Landing = () => {
  // TODO: Create layout.
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton forceRedirectUrl={FORCE_REDIRECT_URL} />
      </SignedOut>

      <h1>HomeBase</h1>
    </>
  )
}
