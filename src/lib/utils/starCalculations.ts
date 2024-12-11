import { STAR_TIERS, StarTier } from '../constants/stars';

export function getStarTier(totalStars: number): StarTier {
  const tier = STAR_TIERS.find(
    tier => totalStars >= tier.min && totalStars <= tier.max
  );
  return tier?.key || 'BRONZE';
}

export function getDisplayStars(totalStars: number) {
  if (totalStars > 10) return totalStars - 10;
  if (totalStars > 5) return totalStars - 5;
  return totalStars;
}

export function getTotalStars(displayStars: number, tier: StarTier) {
  const tierConfig = STAR_TIERS.find(t => t.key === tier);
  if (!tierConfig) return displayStars;
  
  switch (tier) {
    case 'GOLD':
      return displayStars + 10;
    case 'SILVER':
      return displayStars + 5;
    case 'BRONZE':
      return displayStars;
  }
}