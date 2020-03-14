import React from 'react';
import note from './assets/laptop.png';
import ice from './assets/iceberg.png';
import {Textanim} from './Textanim.js';

export const HomeWelcome  =()=> (
  <div className="home_welcome">
  <section id="hero-1">
<div className="parallax_container">
  Parallax section 1
</div>
</section>

<section className="normal-scroll">
<div className="parallax_container">
  Content section 2
</div>
</section>

<section id="hero-2">
<div className="parallax_container">
  Parallax section 2
</div>
</section>

<section className="normal-scroll">
<div className="parallax_container">
  Content section 4
</div>
</section>

<section id="hero-3">
<div className="parallax_container">
  Parallax section 5
</div>
</section>
      </div>


)

export const Home =()=>(
  <div>

      <HomeWelcome/>
    </div>
  )
