import { Layout } from '../components/Layout/Layout';
import { PhotoCardList } from '../components/PhotoCardList';
import { useInfinitePhotos } from '../hooks/useInfinitePhotos';

export const PhotosList = () => {
  const { photos, loading, error, hasMore, sentinelRef } = useInfinitePhotos(30);

  if (error && photos.length === 0) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg border border-gray-200">
            <p className="text-red-600 text-lg mb-4 font-semibold">Error loading photos</p>
            <p className="text-gray-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-md"
            >
              Retry
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Photos</h2>
          <p className="text-gray-600">
            Explore beautiful photos from Lorem Picsum
          </p>
        </div>

        {photos.length === 0 && loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
            <p className="text-gray-600 mt-4">Loading photos...</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {photos.map((photo) => (
                <PhotoCardList key={photo.id} photo={photo} />
              ))}
            </div>

            <div ref={sentinelRef} className="py-8 text-center">
              {loading && (
                <div className="space-y-4">
                  <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600"></div>
                  <p className="text-gray-600">Loading more photos...</p>
                </div>
              )}
              
              {!hasMore && !loading && (
                <div className="bg-white rounded-2xl p-6 max-w-md mx-auto shadow-md border border-gray-200">
                  <p className="text-gray-600">
                    You've reached the end! No more photos to load.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
