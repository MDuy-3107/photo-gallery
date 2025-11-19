import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/photos" className="text-gray-900 hover:text-blue-600 transition-colors">
          <h1 className="text-2xl font-bold">Picsum Photo Gallery</h1>
        </Link>
      </div>
    </header>
  );
};
