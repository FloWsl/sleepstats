import React, { useState } from 'react';
import { Link, useMatchRoute, useNavigate } from '@tanstack/react-router';
import { Calculator, Users, BookOpen } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { PasswordModal } from './PasswordModal';

export function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const matchRoute = useMatchRoute();
  const isTeamRoute = matchRoute({ to: '/team' });
  const isHeroRoute = matchRoute({ to: '/calculator' });
  const isGuideRoute = matchRoute({ to: '/' });

  const { isAuthenticated, authenticate } = useAuthStore();

  const handleProtectedNavigation = (path: string) => {
    if (!isAuthenticated) {
      setShowModal(true);
      setPendingPath(path);
      return;
    }
    navigate({ to: path });
  };

  const handlePasswordSubmit = (password: string) => {
    const isValid = authenticate(password);
    if (isValid && pendingPath) {
      setShowModal(false);
      setError(false);
      navigate({ to: pendingPath });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-15 bg-galaxy-900/95 backdrop-blur-sm border-b border-galaxy-700/50 z-50">
        <div className="max-w-4xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/archeillustree/image/upload/c_crop,w_750,h_750,ar_1:1/v1733072618/GotchiStats3_logo_500.webp"
                alt="Gotchi Stats Logo"
                className="w-8 h-8"
              />
              <span className="text-white font-bold text-lg">Gotchi Stats</span>
            </div>

            <div className="flex gap-4">
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isGuideRoute
                    ? 'bg-button-gradient text-white shadow-button'
                    : 'text-galaxy-300 hover:bg-galaxy-800/50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Airdrop Guide</span>
              </Link>

              <button
                onClick={() => handleProtectedNavigation('/calculator')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isHeroRoute
                    ? 'bg-button-gradient text-white shadow-button'
                    : 'text-galaxy-300 hover:bg-galaxy-800/50'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span>Hero</span>
              </button>

              <button
                onClick={() => handleProtectedNavigation('/team')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isTeamRoute
                    ? 'bg-button-gradient text-white shadow-button'
                    : 'text-galaxy-300 hover:bg-galaxy-800/50'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Team</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showModal && (
        <PasswordModal
          onSubmit={handlePasswordSubmit}
          onClose={() => {
            setShowModal(false);
            setError(false);
            setPendingPath(null);
          }}
          error={error}
        />
      )}
    </>
  );
}