'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-bold transition-opacity hover:opacity-70"
              style={{ color: '#003E6E' }}
            >
              VIXEL
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group py-5"
                >
                  <span 
                    className={`text-sm font-medium tracking-wider transition-colors duration-200 ${
                      pathname === item.href 
                        ? 'text-[#003E6E]' 
                        : 'text-gray-600 hover:text-[#003E6E]'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#003E6E] transform transition-transform duration-200 origin-left ${
                      pathname === item.href 
                        ? 'scale-x-100' 
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;