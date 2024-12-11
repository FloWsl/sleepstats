// Star tier thresholds and order
export const STAR_TIERS = [
  {
    key: 'BRONZE',
    min: 1,
    max: 5,
    text: 'Bronze',
    color: 'text-amber-700',
    bgHover: 'hover:bg-amber-500/10',
    border: 'border-amber-700/30'
  },
  {
    key: 'SILVER',
    min: 6,
    max: 10,
    text: 'Silver',
    color: 'text-gray-300',
    bgHover: 'hover:bg-gray-500/10',
    border: 'border-gray-400/30'
  },
  {
    key: 'GOLD',
    min: 11,
    max: 15,
    text: 'Gold',
    color: 'text-yellow-400',
    bgHover: 'hover:bg-yellow-500/10',
    border: 'border-yellow-400/30'
  }
] as const;

export type StarTier = typeof STAR_TIERS[number]['key'];