import React from 'react'

import { Jumbotron as Jumbo , Container} from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/boat.jpg';

//use string interpolation

const Styles = styled.div`
    .jumbo{
      background:url(${boatImage}) no-repeat fixed bottom;
      background-size:cover;
      color:#ccc;
      height:200px;
      position:relative;
      z-index:-2;
    }
    .overlay {
      background-color:rgba(0,0,0,0.6);

      position:absolute;
      top:0;
      left:0;
      bottom:0;
      z-index:-1;
    }
    .page_footer{
      background:black;
      color:white;
    }
`;

export const Jumbotron = () => (
  <Styles>
      <Jumbo fluid className="jumbo">
          <div className="overlay"></div>
          <Container >
              <h1 className='controlled_font'>Welcome to Sahak Service!</h1>
              <p className='controlled_font'>Learn to code from my Youtube videos! </p>
          </Container>
      </Jumbo>
  </Styles>
)

export const Footer =()=>(
  <Styles>
      <Jumbo fluid className="page_footer">
        <Container>
            <h3>Website coded by Artur Sahakian</h3>
        </Container>
      </Jumbo>
  </Styles>
)
