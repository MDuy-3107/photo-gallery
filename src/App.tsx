import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PhotosList } from './routes/PhotosList';
import { PhotoDetail } from './routes/PhotoDetail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/photos" replace />} />
        <Route path="/photos" element={<PhotosList />} />
        <Route path="/photos/:id" element={<PhotoDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
