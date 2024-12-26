import React, { useState } from 'react';
import { useMatchRoute } from '@tanstack/react-router';
import { Calculator, Users, BookOpen } from 'lucide-react';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const matchRoute = useMatchRoute();
  
  const isTeamRoute = matchRoute({ to: '/team' });
  const isHeroRoute = matchRoute({ to: '/calculator' });
  const isGuideRoute = matchRoute({ to: '/' });

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: '/', icon: BookOpen, label: 'Airdrop Guide', isActive: isGuideRoute },
    { to: '/calculator', icon: Calculator, label: 'Hero', isActive: isHeroRoute },
    { to: '/team', icon: Users, label: 'Team', isActive: isTeamRoute },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-galaxy-900/95 backdrop-blur-sm border-b border-galaxy-700/50 z-50">
        <div className="max-w-4xl mx-auto h-full px-4">
          <div className="flex items-center justify-between h-full">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <NavLink key={link.to} {...link} />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16 bg-galaxy-900/95 backdrop-blur-sm animate-fadeIn">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} {...link} onClick={closeMenu} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}