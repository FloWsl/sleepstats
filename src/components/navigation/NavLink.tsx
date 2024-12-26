import React from 'react';
import { Link } from '@tanstack/react-router';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

export function NavLink({ to, icon: Icon, label, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all w-full lg:w-auto ${
        isActive
          ? 'bg-button-gradient text-white shadow-button'
          : 'text-galaxy-300 hover:bg-galaxy-800/50'
      }`}
    >
      <Icon className="w-5 h-5 lg:w-4 lg:h-4" />
      <span className="text-base lg:text-sm">{label}</span>
    </Link>
  );
}