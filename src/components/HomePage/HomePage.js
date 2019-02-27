import React, { Component } from 'react';

import HomePageCarousel from './HomePageCarousel';
import './HomePage.scss';
import HomePageJumbotron from './Jumbotron/Jumbotron'
import HomePageSiteDescription from './SiteDescription/SiteDescription'


class HomePage extends Component {
  render() {
    return (
    <main>
      <div className="HomePage">
        <HomePageJumbotron />
        {/* <HomePageCarousel /> */}
        <HomePageSiteDescription />
      </div>

    </main>
    );
  };
};

export default HomePage;