import React, { Component } from 'react';
import './HomePage.scss';
import HomePageJumbotron from './Jumbotron/Jumbotron'
import CheckList from './CheckList/CheckList'
import HomePageCards from './CardDeck/HomePageCards'
import HorizontalLine from '../HorizontalLine';
import Footer from './Footer';
import HomePagePartners from './Partners/PartnersSection'


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
        <CheckList />
        <HorizontalLine />
        <HomePageCards />
        <HomePagePartners />
        <Footer />
      </div>

    </main>
    );
  };
};

export default HomePage;