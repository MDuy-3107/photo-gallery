import { useState, useEffect, useCallback, useRef } from 'react';
import { Photo, picsumApi } from '../api/picsum';

interface UseInfinitePhotosResult {
  photos: Photo[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  sentinelRef: (node: HTMLDivElement | null) => void;
}

export const useInfinitePhotos = (limit: number = 30): UseInfinitePhotosResult => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const newPhotos = await picsumApi.getPhotos(page, limit);
      
      if (newPhotos.length === 0) {
        setHasMore(false);
      } else {
        setPhotos(prev => [...prev, ...newPhotos]);
        setPage(prev => prev + 1);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load photos');
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, limit]);

  // Initial load
  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Intersection Observer callback
  const sentinelRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      // Disconnect previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Create new observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !loading) {
            loadMore();
          }
        },
        {
          rootMargin: '200px', // Load before user reaches the bottom
        }
      );

      // Observe new sentinel
      if (node) {
        observerRef.current.observe(node);
      }
    },
    [loading, hasMore, loadMore]
  );

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return {
    photos,
    loading,
    error,
    hasMore,
    loadMore,
    sentinelRef,
  };
};
