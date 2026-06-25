import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { HomePage } from './pages/HomePage';
import { ToolboxPage } from './pages/ToolboxPage';
import { ResearchPage } from './pages/ResearchPage';
import { CommunityPage } from './pages/CommunityPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { FAQPage } from './pages/FAQPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="toolbox" element={<ToolboxPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
