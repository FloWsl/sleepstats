import React from 'react';
import { Star } from 'lucide-react';
import { STAR_TIERS } from '../../lib/constants/stars';
import { getStarTier, getDisplayStars } from '../../lib/utils/starCalculations';

interface StarDisplayProps {
  stars: number;
}

export function StarDisplay({ stars }: StarDisplayProps) {
  const tier = getStarTier(stars);
  const displayStars = getDisplayStars(stars);
  const tierConfig = STAR_TIERS.find(t => t.key === tier);
  if (!tierConfig) return null;
  
  return (
    <div className="flex gap-1">
      {Array.from({ length: displayStars }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${tierConfig.color}`}
          fill="currentColor"
        />
      ))}
    </div>
  );
}