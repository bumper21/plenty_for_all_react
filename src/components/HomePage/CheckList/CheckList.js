import React, { Component } from 'react';
import { Image, Container } from 'react-bootstrap';
import Checkmark from '../../../images/tick.svg'
import './CheckList.scss'

class CheckList extends Component {
  render() {
    return (
    <div className="checklist">
      <Container className="checklist__container">
        <h1 className="checklist__header"> Write Header Here</h1>
        <p className="checklist__sub-header"> Something about what this section is about. Something about what this section is about. Something about what this section is about. </p>

        <ul className="checklist__list">
          <li className="checklist__item">
            <Image src={Checkmark} className="checklist--checkmark-img" alt="" />
            Something this site offers. Something this site offers. Something this site offers.
          </li>
          <li className="checklist__item">
            <Image src={Checkmark} className="checklist--checkmark-img" alt="" />
            Something this siteSomething this site offers. Something this site offers.
          </li>
          <li className="checklist__item">
            <Image src={Checkmark} className="checklist--checkmark-img" alt="" />
            Something this site offers. Something this site offers. Somet
          </li>
          <li className="checklist__item">
            <Image src={Checkmark} className="checklist--checkmark-img" alt="" />
            Something this siteSomething this site offers. Something this site offers.
          </li>
        </ul>
      </Container>
    </div>
    )
  }
}

export default CheckList;