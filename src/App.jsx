import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

export default function App() {
  return (
    <BrowserRouter>
      <div className="grain">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiment/:id" element={<CaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
