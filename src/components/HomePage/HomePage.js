import React, { Component } from 'react';

import HomePageCarousel from './HomePageCarousel';
import './HomePage.scss';


class HomePage extends Component {
  render() {
    return (
    <main>
      <div className="HomePage">
        <HomePageCarousel />
      </div>

    </main>
    );
  };
};

export default HomePage;