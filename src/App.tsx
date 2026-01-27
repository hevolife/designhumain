import { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { IndividualCoaching } from './pages/IndividualCoaching';
import { HumanDesign } from './pages/HumanDesign';
import { Pricing } from './pages/Pricing';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'individual':
        return <IndividualCoaching />;
      case 'human-design':
        return <HumanDesign onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
