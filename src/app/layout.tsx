import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Golf Hub | Used Golf Equipment Marketplace',
  description: 'Buy and sell used golf clubs and equipment from trusted vendors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-100 mt-auto py-8">
          <div className="container-custom text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Golf Hub. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
} 