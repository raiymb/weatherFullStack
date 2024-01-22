import React from 'react';
import CurrentWeatherPage from './pages/CurrentWeatherPage';

import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <CurrentWeatherPage />
      <Footer />
    </div>
  );
};

export default App;