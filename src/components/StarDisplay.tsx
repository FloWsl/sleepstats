import React from 'react';
import { Star } from 'lucide-react';

interface StarDisplayProps {
  stars: number;
}

export function StarDisplay({ stars }: StarDisplayProps) {
  // Determine star color based on total stars
  let starColor = '';
  let starClass = '';
  
  if (stars > 10) {
    starColor = 'gold';
    starClass = 'text-yellow-400';
  } else if (stars > 5) {
    starColor = 'silver';
    starClass = 'text-gray-300';
  } else {
    starColor = 'bronze';
    starClass = 'text-amber-700';
  }

  // Calculate number of stars to display (max 5)
  const displayStars = Math.min(5, stars > 10 ? stars - 10 : stars > 5 ? stars - 5 : stars);

  return (
    <div className="flex gap-1">
      {Array.from({ length: displayStars }).map((_, i) => (
        <Star
          key={`${starColor}-${i}`}
          className={`w-4 h-4 ${starClass}`}
          fill="currentColor"
        />
      ))}
    </div>
  );
}
