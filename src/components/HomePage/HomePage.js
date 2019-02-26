import React from 'react';
// import {Image} from 'react-bootstrap';
import HomePageCarousel from './HomePageCarousel';
import './HomePage.scss';


const HomePage = props => {
  const {} = props;

  return (
  <main>
    <div className="HomePage">
      <HomePageCarousel />
    </div>

  </main>
  );
};

export default HomePage;