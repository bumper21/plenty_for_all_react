import React, { Component } from 'react';
import './HomePage.scss';
import HomePageJumbotron from './Jumbotron/Jumbotron'
import HomePageSiteDescription from './SiteDescription/SiteDescription'
// import LoadingSpinner from '../LoadingSpinner';
// import HomePageCarousel from './HomePageCarousel';


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
      </div>

    </main>
    );
  };
};

export default HomePage;