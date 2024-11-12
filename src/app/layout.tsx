import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cyber Alamo',
  description: 'Leading in Embedded Cyber Security, AI, and Web Security Solutions',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary text-white`}>
        
        {/* Header */}
        <header className="w-full bg-black p-6">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Cyber Alamo Logo"
                className="h-36 w-auto"
              />
            </Link>
            <nav>
              <ul className="flex space-x-8 items-center">
                <li>
                  <Link href="/" className="hover:text-red-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-red-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-red-600">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-red-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-red-600">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <span className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="w-full bg-black text-white py-12">
          <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Contact Information */}
            <div>
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="Cyber Alamo Logo"
                  className="h-24 w-auto mb-6"
                />
              </Link>
              <p className="mb-2">1857 Madison Street</p>
              <p className="mb-2">Hollywood, FL 33020</p>
              <p className="mb-2">
                Phone:{' '}
                <a href="tel:3059098647" className="hover:text-red-600">
                  305-909-8647
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:support@cyberalamo.com" className="hover:text-red-600">
                  support@cyberalamo.com
                </a>
              </p>
            </div>

            {/* Useful Links (spanning two columns) */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-6">Useful Links</h3>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link href="/" className="hover:text-red-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-red-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-red-600">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-red-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-red-600">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <span className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 inline-block">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 flex items-center"
                  >
                    <span className="mr-2">🌐</span> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 flex items-center"
                  >
                    <span className="mr-2">🌐</span> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/yourcompany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 flex items-center"
                  >
                    <span className="mr-2">🌐</span> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 flex items-center"
                  >
                    <span className="mr-2">🌐</span> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
