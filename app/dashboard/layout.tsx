import Header from '@/components/layout/header';
import { Toaster } from '@/components/ui/sonner';
import { auth } from '@clerk/nextjs/server';
import React from 'react';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  return (
    <div className="min-w-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        {children}
        <Toaster richColors />
      </main>
    </div>
  );
}
