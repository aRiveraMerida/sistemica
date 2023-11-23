'use client';

import Logo from './logo';

export default function Header() {
  return (
    <header>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
}
