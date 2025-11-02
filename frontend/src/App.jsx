import { Box, useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import BackgroundGradient from './components/BackgroundGradient.jsx';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash && pathname === '/') {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash, pathname]);

  return null;
};

const ForceDarkMode = () => {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode !== 'dark') {
      setColorMode('dark');
    }
  }, [colorMode, setColorMode]);

  return null;
};

const App = () => (
  <Box position="relative" minH="100vh" overflowX="hidden">
    <BackgroundGradient />
    <Navbar />
    <ForceDarkMode />
    <ScrollToHash />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
