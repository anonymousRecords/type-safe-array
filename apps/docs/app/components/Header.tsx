import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          TypeSafeArray
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/docs" className="text-gray-600 hover:text-primary">
                Docs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
