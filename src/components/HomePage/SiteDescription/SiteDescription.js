import React, { Component } from 'react';
import { Image, Container } from 'react-bootstrap';

import Checkmark from '../../../images/tick.svg'
import HomePage from '../HomePage';
import './SiteDescription.scss'

class HomePageSiteDescription extends Component {
  render() {
    return (
    <div className="HomePageDescriptionContainer">
      <Container>
        <h1> Write Header Here</h1>
        <p id="headerDescription"> Something about what this section is about. Something about what this section is about. Something about what this section is about. </p>

        <ul>
          <li>
            <Image src={Checkmark} alt="" />
            Something this site offers. Something this site offers. Something this site offers.
          </li>
          <li>
            <Image src={Checkmark} alt="" />
            Something this siteSomething this site offers. Something this site offers.
          </li>
          <li>
            <Image src={Checkmark} alt="" />
            Something this site offers. Something this site offers. Somet
          </li>
          <li>
            <Image src={Checkmark} alt="" />
            Something this site offete os
          </li>
        </ul>
      </Container>
    </div>
    )
  }
}

export default HomePageSiteDescription;