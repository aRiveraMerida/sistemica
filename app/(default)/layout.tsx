'use client';

import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '@/app/components/ui/footer';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
