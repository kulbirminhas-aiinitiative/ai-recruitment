import React from 'react';

// This layout simply passes children through. 
// It's useful for grouping routes without adding UI.
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ flex: '1 0 auto' }}>{children}</main>
      <Footer />
    </>
  );
}
