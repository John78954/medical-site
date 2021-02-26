import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Sanitizer from '../images/medical-hand-sanitizer-mask-gloves.jpg';
import Office from '../images/medical-appointment-doctor-office.jpg';
import Pharmacy from '../images/medical-pharmacy-vitamins-medicine.jpg';
import '../css/Rowone.css'

class Rowone extends Component {
    render() {
      return (
        <div className="Rowone">
          <CardDeck id="carddeck">
          <Card style={{ width: '18rem'}}>
            <img id="office" variant="top" src={Office} alt="Medical office."></img>
            <Card.Body>
              <Card.Title>See a Doctor</Card.Title>
              <Card.Text>
                Don't wait, see a doctor for any medical treatment needed for your health today.
              </Card.Text>
              <Button variant="primary" href="/appointments">Click Here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <img id="sanitizer" variant="top" src={Sanitizer} alt="Medical hand sanitizer."></img>
            <Card.Body>
              <Card.Title>Emergency</Card.Title>
              <Card.Text>
                Pick up the phone and call 911 for a real emergency or click to contact for any medical questions.
              </Card.Text>
              <Button variant="primary" href="/contact">Click Here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <img id="pharmacy" variant="top" src={Pharmacy} alt="Medical Pharmacy."></img>
            <Card.Body>
              <Card.Title>Medicare Plan</Card.Title>
              <Card.Text>
                Click here to see your medicare plan or subscribe to a new plan today.
              </Card.Text>
              <Button variant="primary" href="/shop">Click Here</Button>
            </Card.Body>
          </Card>
          </CardDeck>
        </div>
      )
    }
  }

export default Rowone;