import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PhotosList } from './routes/PhotosList';
import { PhotoDetail } from './routes/PhotoDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/photos" replace />} />
        <Route path="/photos" element={<PhotosList />} />
        <Route path="/photos/:id" element={<PhotoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
