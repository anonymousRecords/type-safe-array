import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} TypeSafeArray. All rights reserved.
            </p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/docs" className="text-sm text-gray-600 hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/anonymousRecords/type-safe-array"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
