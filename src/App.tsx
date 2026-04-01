import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { PeoplePage } from './pages/PeoplePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PublicationsPage } from './pages/PublicationsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="gui" element={<Navigate to="/projects" replace />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="publications" element={<PublicationsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
