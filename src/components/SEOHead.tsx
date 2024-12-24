import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOHead({ 
  title = 'Gotchi Stats - Sleepagotchi PLAY2AIRDROP Guide',
  description = 'Complete guide for Sleepagotchi LITE gameplay mechanics and airdrop optimization strategies. Learn how to maximize your token allocation in the upcoming distribution.',
  image = 'https://res.cloudinary.com/archeillustree/image/upload/c_crop,w_750,h_750,ar_1:1/v1733072618/GotchiStats3_logo_500.webp',
  url = 'https://gotchistats.com'
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="Sleepagotchi, PLAY2AIRDROP, crypto gaming, blockchain games, gaming guide, token airdrop, Solana gaming" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}