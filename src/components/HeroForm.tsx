import React, { useState } from 'react';
import { Crown } from 'lucide-react';
import { LevelInput } from './LevelInput';
import { StarTierSelector } from './stars/StarTierSelector';
import { StarSelector } from './stars/StarSelector';
import { RARITY_NAMES } from '../lib/constants';
import { getStarTier, getDisplayStars } from '../lib/utils/starCalculations';
import type { Rarity, Stars, Level } from '../lib/types';
import type { StarTier } from '../lib/constants/stars';

interface HeroFormProps {
  rarity: Rarity;
  stars: Stars;
  level: Level;
  onChange: (values: { rarity?: Rarity; stars?: Stars; level?: Level }) => void;
}

export function HeroForm({ rarity, stars, level, onChange }: HeroFormProps) {
  const [currentTier, setCurrentTier] = useState<StarTier>(
    getStarTier(stars)
  );

  return (
    <div className="bg-container-gradient backdrop-blur-sm rounded-xl p-6 border border-galaxy-700 shadow-neon">
      <div className="flex flex-col space-y-6">
        {/* Rarity Section */}
        <div>
          <label className="block text-sm font-medium text-galaxy-50 mb-2">
            Rarity
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((r) => (
              <button
                key={r}
                onClick={() => onChange({ rarity: r as Rarity })}
                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-full border transition-all duration-200 ${
                  rarity === r
                    ? 'bg-button-gradient border-galaxy-100 text-galaxy-50 shadow-button'
                    : 'bg-container-gradient border-galaxy-700 text-galaxy-200 hover:bg-galaxy-800/50'
                }`}
              >
                <Crown
                  className={`w-4 h-4 ${
                    rarity === r ? 'text-galaxy-400' : 'text-galaxy-200'
                  }`}
                />
                <span className="text-sm font-medium">
                  {RARITY_NAMES[r as Rarity]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stars Section */}
        <div>
          <label className="block text-sm font-medium text-galaxy-50 mb-2">
            Total Stars ({stars}/15)
          </label>
          <StarTierSelector
            currentTier={currentTier}
            onTierSelect={setCurrentTier}
          />
          <StarSelector
            selectedStars={stars}
            currentTier={currentTier}
            onChange={(newStars) => onChange({ stars: newStars })}
          />
        </div>

        {/* Level Input Section */}
        <div>
          <LevelInput
            level={level}
            onChange={(newLevel) => onChange({ level: newLevel })}
          />
        </div>
      </div>
    </div>
  );
}