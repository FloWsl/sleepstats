import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="https://res.cloudinary.com/archeillustree/image/upload/c_crop,w_750,h_750,ar_1:1/v1733072618/GotchiStats3_logo_500.webp"
        alt="Gotchi Stats Logo"
        className="w-8 h-8"
      />
      <span className="text-white font-bold text-lg">Gotchi Stats</span>
    </div>
  );
}