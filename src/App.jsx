import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Academic } from './pages/Academic';
import { Activities } from './pages/Activities';
import { Projects } from './pages/Projects';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="academic" element={<Academic />} />
          <Route path="activities" element={<Activities />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
