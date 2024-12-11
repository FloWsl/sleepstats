import React from 'react';
import { Star } from 'lucide-react';
import { STAR_TIERS, StarTier } from '../../lib/constants/stars';
import { getTotalStars } from '../../lib/utils/starCalculations';

interface StarSelectorProps {
  selectedStars: number;
  currentTier: StarTier;
  onChange: (stars: number) => void;
}

export function StarSelector({ selectedStars, currentTier, onChange }: StarSelectorProps) {
  const tierConfig = STAR_TIERS.find(t => t.key === currentTier);
  if (!tierConfig) return null;
  
  return (
    <div className="grid grid-cols-5 gap-2">
      {Array.from({ length: 5 }, (_, i) => i + 1).map((displayStars) => {
        const totalStars = getTotalStars(displayStars, currentTier);
        const isSelected = selectedStars === totalStars;
        
        return (
          <button
            key={displayStars}
            onClick={() => onChange(totalStars)}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg border transition-all duration-200 ${
              isSelected
                ? 'bg-button-gradient border-galaxy-100 text-galaxy-50 shadow-button'
                : `bg-container-gradient border-galaxy-700 ${tierConfig.color} hover:bg-galaxy-800/50`
            }`}
          >
            <Star
              className="w-4 h-4"
              fill={isSelected ? 'currentColor' : 'none'}
            />
            <span className="text-sm font-medium">{displayStars}</span>
          </button>
        );
      })}
    </div>
  );
}