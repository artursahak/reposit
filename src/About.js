import React from 'react';
import phone from './assets/open.jpg';

export const About = () => (
  <div>
        <div className="iphone_cont">
            <img src={phone} />
            <img src={phone} />
            <img src={phone} />
            <img src={phone} />
        </div>
        <div className="iphone_text">
            <h1>Welcome to our workshop!</h1>
            <p>Here we will learn </p>
        </div>
    </div>
)
