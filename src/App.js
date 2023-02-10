import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<MainPage />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
