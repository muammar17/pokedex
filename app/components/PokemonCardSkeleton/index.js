/**
 * PokemonCardSkeleton Component
 * Loading skeleton that mimics PokemonCard structure using PrimeReact Skeleton
 */

import React, { memo } from 'react';
import { Skeleton } from 'primereact/skeleton';

function PokemonCardSkeleton({ count = 1 }) {
  // Generate array of skeletons based on count
  const skeletons = Array.from({ length: count }, (_, i) => i);

  return skeletons.map(index => (
    <div key={index} className="pokemon-card pokemon-card-skeleton">
      {/* Pokemon Number Skeleton */}
      <div className="pokemon-number">
        <Skeleton width="40px" height="14px" borderRadius="4px" />
      </div>

      {/* Pokemon Image Skeleton */}
      <div className="pokemon-image-wrapper">
        <Skeleton width="96px" height="96px" borderRadius="8px" />
      </div>

      {/* Pokemon Name Skeleton */}
      <div className="pokemon-name">
        <Skeleton width="80%" height="16px" borderRadius="4px" />
      </div>

      {/* Pokemon Type Badge Skeletons */}
      <div className="pokemon-types">
        <Skeleton width="60px" height="20px" borderRadius="10px" />
        <Skeleton width="60px" height="20px" borderRadius="10px" />
      </div>
    </div>
  ));
}

export default memo(PokemonCardSkeleton);
