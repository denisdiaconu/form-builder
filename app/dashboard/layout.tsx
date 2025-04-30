import Header from '@/components/layout/header';
import React from 'react';

export default function DashboardLayout({children}: { children: React.ReactNode}) {
  return <div className='min-w-screen flex flex-col'>
    <Header />
    <main className='flex-1 container mx-auto p-4'>
        {children}
    </main>
  </div>;
}
