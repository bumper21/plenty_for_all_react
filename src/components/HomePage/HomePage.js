import React, { Component } from 'react';
import './HomePage.scss';
import HomePageJumbotron from './Jumbotron/Jumbotron'
import HomePageSiteDescription from './SiteDescription/SiteDescription'
import HomePageCards from './CardDeck/HomePageCards'
import HorizontalLine from '../HorizontalLine';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount() {


  }

  render() {

    return (
    <main>
      <div className="HomePage">
        <HomePageJumbotron />
        {/* <HomePageCarousel /> */}
        <HomePageSiteDescription />
        <HorizontalLine />
        <HomePageCards />
      </div>

    </main>
    );
  };
};

export default HomePage;