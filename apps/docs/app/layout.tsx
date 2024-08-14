import type { Metadata } from 'next';
import './globals.css';
import Layout from './components/Layout';

export const metadata: Metadata = {
  title: 'TypeSafeArray Documentation',
  description: 'Official documentation for TypeSafeArray utility library',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
