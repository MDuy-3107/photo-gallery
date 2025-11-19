import { Link } from 'react-router-dom';
import { Photo } from '../api/picsum';

interface PhotoCardListProps {
  photo: Photo;
}

export const PhotoCardList = ({ photo }: PhotoCardListProps) => {
  const thumbnailUrl = `https://picsum.photos/id/${photo.id}/300/200`;

  return (
    <div className="flex gap-4 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-4">
      <Link to={`/photos/${photo.id}`} className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden group">
        <img
          src={thumbnailUrl}
          alt={`Photo by ${photo.author}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Photo #{photo.id}
          </h3>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Author:</span> {photo.author}
          </p>
          <p className="text-gray-500 text-sm">
            <span className="font-medium">Dimensions:</span> {photo.width} × {photo.height} px
          </p>
        </div>
        
        <div className="flex gap-2 mt-3">
          <Link
            to={`/photos/${photo.id}`}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
