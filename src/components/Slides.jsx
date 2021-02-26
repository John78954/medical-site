import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Laboratory from '../images/medical-laboratory-blood-test.jpg';
import Corona from '../images/medical-corona-virus-pathogen.jpg';
import Testtube from '../images/medical-lab-blood-test-tubes.jpg';
import '../css/Slides.css';

class Slides extends Component {
    render() {
      return (
        <div className="Slides">
            <Carousel>
                <Carousel.Item>
                    <img id="lab" src={Laboratory} alt="First slide" />
                    <Carousel.Caption>
                    <h3>Get a blood test today!</h3>
                    <p>Don't wait for your medical issues to take over, get tested now!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id="covid" src={Corona} alt="Second slide" />
                    <Carousel.Caption>
                    <h3>Infected with Covid-19?</h3>
                    <p>Get vaccinated today if you're over the age of 65.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id="test-tube" src={Testtube} alt="Third slide" />
                    <Carousel.Caption>
                    <h3>Wear a mask!</h3>
                    <p>Protect others from Covid-19 and get tested today.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
      )
    }
  }

export default Slides;