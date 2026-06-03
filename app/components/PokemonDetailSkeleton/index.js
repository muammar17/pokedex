/**
 * PokemonDetailSkeleton Component
 * Loading skeleton that mimics PokemonDetailPage structure using PrimeReact Skeleton
 */

import React, { memo } from 'react';
import { Skeleton } from 'primereact/skeleton';

function PokemonDetailSkeleton() {
  return (
    <div className="pokemon-detail-page">
      <div className="mobile-container">
        {/* Detail Header Skeleton */}
        <div className="detail-header skeleton-header">
          <Skeleton width="60%" height="28px" borderRadius="4px" className="skeleton-title" />
          <Skeleton width="80px" height="20px" borderRadius="4px" className="skeleton-number" />
        </div>

        {/* Pokemon Detail Image Skeleton */}
        <div className="pokemon-detail-image">
          <div className="detail-image-container">
            <Skeleton width="200px" height="200px" borderRadius="12px" className="skeleton-image" />
          </div>
          <div className="detail-types">
            <Skeleton width="80px" height="32px" borderRadius="16px" className="skeleton-type" />
            <Skeleton width="80px" height="32px" borderRadius="16px" className="skeleton-type" />
          </div>
        </div>

        {/* Stats Summary Skeleton */}
        <div className="stats-summary">
          <div className="summary-item">
            <Skeleton width="60px" height="14px" borderRadius="4px" className="skeleton-label" />
            <Skeleton width="100px" height="16px" borderRadius="4px" className="skeleton-value" />
          </div>
          <div className="summary-item">
            <Skeleton width="60px" height="14px" borderRadius="4px" className="skeleton-label" />
            <Skeleton width="100px" height="16px" borderRadius="4px" className="skeleton-value" />
          </div>
          <div className="summary-item">
            <Skeleton width="70px" height="14px" borderRadius="4px" className="skeleton-label" />
            <div className="abilities-list">
              <Skeleton width="90px" height="24px" borderRadius="12px" className="skeleton-ability" />
              <Skeleton width="90px" height="24px" borderRadius="12px" className="skeleton-ability" />
            </div>
          </div>
        </div>

        {/* Base Stats Table Skeleton */}
        <div className="base-stats-table">
          <div className="stats-header">
            <Skeleton width="100px" height="20px" borderRadius="4px" className="skeleton-section-title" />
            <Skeleton width="100px" height="20px" borderRadius="4px" className="skeleton-total" />
          </div>
          <div className="stats-table-container">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="stat-row">
                <Skeleton width="50px" height="14px" borderRadius="4px" className="skeleton-stat-name" />
                <Skeleton width="40px" height="14px" borderRadius="4px" className="skeleton-stat-value" />
                <div className="stat-bar-container">
                  <Skeleton width="60%" height="16px" borderRadius="8px" className="skeleton-stat-bar" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Entry Detail Skeleton */}
        <div className="entry-detail">
          <Skeleton width="120px" height="20px" borderRadius="4px" className="skeleton-section-title" />
          <div className="entry-genus">
            <Skeleton width="80px" height="14px" borderRadius="4px" className="skeleton-genus-label" />
            <Skeleton width="100px" height="14px" borderRadius="4px" className="skeleton-genus-value" />
          </div>
          <div className="entry-description">
            <Skeleton width="100%" height="14px" borderRadius="4px" className="skeleton-desc-line" />
            <Skeleton width="100%" height="14px" borderRadius="4px" className="skeleton-desc-line" />
            <Skeleton width="80%" height="14px" borderRadius="4px" className="skeleton-desc-line" />
          </div>
          <div className="entry-generation">
            <Skeleton width="90px" height="14px" borderRadius="4px" className="skeleton-gen-label" />
            <Skeleton width="80px" height="14px" borderRadius="4px" className="skeleton-gen-value" />
          </div>
          <div className="entry-growth-rate">
            <Skeleton width="100px" height="14px" borderRadius="4px" className="skeleton-growth-label" />
            <Skeleton width="90px" height="14px" borderRadius="4px" className="skeleton-growth-value" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PokemonDetailSkeleton);
