// src/routes.js
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import CoursesPage from './pages/CoursesPage';
// import FacultyPage from './pages/FacultyPage';
// import AdmissionsPage from './pages/AdmissionsPage';
// import ContactPage from './pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;