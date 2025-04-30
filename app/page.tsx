import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Form Builder</h1>
          <div>
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
      </header>
      <div className="bg-blue-50 flex-1">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Create Custom Forms with Ease
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Build forms, collect responses, and analyze data - all in one
            platform.
          </p>
          <SignedIn>
            <Button asChild size="lg">
              <Link href="/dashboard/forms/create">Create a Form</Link>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>Get Started</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
