import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Photo, picsumApi } from '../api/picsum';

export const PhotoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      if (!id) {
        setError('No photo ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await picsumApi.getPhotoById(id);
        setPhoto(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load photo');
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
          <p className="text-gray-600 mt-4">Loading photo...</p>
        </div>
      </Layout>
    );
  }

  if (error || !photo) {
    return (
      <Layout>
        <div className="text-center py-12">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg border border-gray-200">
            <p className="text-red-600 text-lg mb-4 font-semibold">Error loading photo</p>
            <p className="text-gray-600 mb-6">{error || 'Photo not found'}</p>
            <button
              onClick={() => navigate('/photos')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-md"
            >
              Back to Photos
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const displayImageUrl = `https://picsum.photos/id/${photo.id}/1200/800`;
  const originalImageUrl = photo.download_url;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Back button */}
        <Link
          to="/photos"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Photos
        </Link>

        {/* Photo detail content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Large image */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
              <img
                src={displayImageUrl}
                alt={`Photo by ${photo.author}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right: Info card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 space-y-6 sticky top-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Beautiful photo #{photo.id}
                </h1>
                <p className="text-gray-600 text-sm">Photo from Lorem Picsum</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Author</h3>
                  <p className="text-gray-900 text-lg font-semibold">{photo.author}</p>
                </div>

                <div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This is a sample description for this photo from Lorem Picsum. 
                    The actual API does not provide description, so this is placeholder 
                    text for UI demonstration purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">Original Size</h3>
                  <p className="text-gray-900 font-medium">
                    {photo.width} × {photo.height} px
                  </p>
                </div>
              </div>

              <a
                href={originalImageUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View original
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
