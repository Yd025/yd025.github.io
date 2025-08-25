import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Academic } from './pages/Academic';
import { Activities } from './pages/Activities';
import { Projects } from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The Layout component wraps all pages to provide the Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          {/* The 'index' route is the default page (your homepage) */}
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="academic" element={<Academic />} />
          <Route path="activities" element={<Activities />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;