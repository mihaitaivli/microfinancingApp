import React from 'react';
import Jumbotron from './Jumbotron';
import FrontPageSection from './FrontPageSection';

const Home = () => {
  return(
    <div className="header">
      <Jumbotron />
      <FrontPageSection />
    </div>
  );
}

export default Home;