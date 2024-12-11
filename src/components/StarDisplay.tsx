import React from 'react';
import { Star } from 'lucide-react';

interface StarDisplayProps {
  stars: number;
}

export function StarDisplay({ stars }: StarDisplayProps) {
  // Calculate the number of each type of star
  const goldStars = Math.max(0, Math.min(5, stars - 10));
  const silverStars = Math.max(0, Math.min(5, stars - 5 - goldStars));
  const bronzeStars = Math.max(0, Math.min(5, stars - silverStars - goldStars));

  return (
    <div className="flex gap-1">
      {/* Gold Stars */}
      {goldStars > 0 && Array.from({ length: goldStars }).map((_, i) => (
        <Star
          key={`gold-${i}`}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
        />
      ))}
      
      {/* Silver Stars */}
      {silverStars > 0 && Array.from({ length: silverStars }).map((_, i) => (
        <Star
          key={`silver-${i}`}
          className="w-4 h-4 text-gray-300"
          fill="currentColor"
        />
      ))}
      
      {/* Bronze Stars */}
      {bronzeStars > 0 && Array.from({ length: bronzeStars }).map((_, i) => (
        <Star
          key={`bronze-${i}`}
          className="w-4 h-4 text-amber-700"
          fill="currentColor"
        />
      ))}
    </div>
  );
}