import React from 'react';
import { STAR_TIERS, StarTier } from '../../lib/constants/stars';

interface StarTierSelectorProps {
  currentTier: StarTier;
  onTierSelect: (tier: StarTier) => void;
}

export function StarTierSelector({ currentTier, onTierSelect }: StarTierSelectorProps) {
  return (
    <div className="flex gap-2 mb-4">
      {STAR_TIERS.map((tier) => (
        <button
          key={tier.key}
          onClick={() => onTierSelect(tier.key)}
          className={`px-3 py-1 rounded-lg border transition-all ${
            currentTier === tier.key
              ? `${tier.color} ${tier.border} ${tier.bgHover}`
              : 'text-galaxy-400 border-galaxy-700/50 hover:bg-galaxy-800/50'
          }`}
        >
          {tier.text}
        </button>
      ))}
    </div>
  );
}