import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Courses from './pages/Courses';
import Terms from './pages/Terms';
import './App.css';
import ScrollToTop from './hooks/ScrollToTop';
import CourseDetail from './pages/CourseDetail';
import InstructorDetail from './pages/InstructorDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename={import.meta.env.DEV ? "/" : "/skill-verge-website"}>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/terms" element={<Terms />} />
            {/* Placeholder for enrollment form */}
            <Route path="/enroll" element={<div className="min-h-screen pt-20 flex items-center justify-center"><div className="text-center"><h1 className="text-3xl font-bold mb-4">Enrollment Form</h1><p className="text-gray-600">Google Form will be embedded here</p></div></div>} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/instructor/:instructorId" element={<InstructorDetail />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
