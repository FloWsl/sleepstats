import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';

interface PasswordModalProps {
  onSubmit: (password: string) => void;
  onClose: () => void;
  error?: boolean;
}

export function PasswordModal({ onSubmit, onClose, error }: PasswordModalProps) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <div className="fixed inset-0 bg-galaxy-950/80 flex items-center justify-center p-4 z-50">
      <div className="bg-galaxy-900 rounded-xl p-6 w-full max-w-md border border-galaxy-700 shadow-neon">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold text-galaxy-100">Access Required</h2>
          </div>
          <button onClick={onClose} className="text-galaxy-400 hover:text-galaxy-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-galaxy-300 mb-6">
          This section is currently under construction and requires a password to access.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-galaxy-800 border ${
                error ? 'border-red-500' : 'border-galaxy-700'
              } rounded-lg px-4 py-2 text-galaxy-100 focus:outline-none focus:border-purple-400`}
              placeholder="Enter password"
            />
            {error && (
              <p className="text-red-400 text-sm mt-2">Invalid password</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-button-gradient text-white py-2 rounded-lg hover:shadow-button transition-all"
          >
            Access Calculator
          </button>
        </form>
      </div>
    </div>
  );
}