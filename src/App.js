// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import CoursesPage from './pages/CoursesPage';
// import FacultyPage from './pages/FacultyPage';
// import AdmissionsPage from './pages/AdmissionsPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/faculty" component={FacultyPage} />
        <Route path="/admissions" component={AdmissionsPage} />
        <Route path="/contact" component={ContactPage} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;