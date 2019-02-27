import React, { Component } from 'react';
// import HomePageCarousel from './HomePageCarousel';
import './HomePage.scss';
import HomePageJumbotron from './Jumbotron/Jumbotron'
import HomePageSiteDescription from './SiteDescription/SiteDescription'
// import LoadingSpinner from '../LoadingSpinner';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount() {


  }

  render() {
    // if (this.state.loading) {
    //   return (
    //     <div className="HomePage">
    //       <LoadingSpinner />
    //     </div>
    //   )
    // }

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