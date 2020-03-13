import React from 'react';
import note from './assets/laptop.png';
import ice from './assets/iceberg.png';
export const HomeWelcome =()=>(
  <div className="home_welcome">
      <div>
        <img src={note} id="note_image" />
        <img src={ice} id="ice_image" />
      </div>
      <div>
        <p id="home_text1">
        Mission and Vision Statement
        Mission Statement: As an educator I will provide for students the opportunity to make a positive difference in their lives to help them accomplish unexpected goals. I will enhance learning to support my students in achieving their highest potential by integrating technology into the curriculum.  I will integrate conceptual technology learning techniques that will implement concrete knowledge of technology that will emphasize mastery of understanding. Through committed support from educators, faculty, staff, parents, and the community, I will advance learning to support my students. This will allow students to become confident, creative, motivated, technology-ready students. I will provide leadership to…show more content…
        Students are given the opportunity to learn efficiently from educators that are diligently dedicated and knowledgeable of their profession. Incorporating programs that reflects one’s mission will ensure learning that is flourishing. 21st Century for example, is an educational organization that provides the required assets for educational opportunities to thrive. 21st Century defines its program through the Partnership for 21st Century Skills (2007) that advocates readiness for students by providing tools and resources that will readily prepare students to advance in the digital world. This gives the educator the opportunity to include various techniques of learning critical to global awareness. Visions statements guide one to a successful future. A vision is considerably created after a mission statement to determine future goals that are to be achieved.
        </p>
      </div>

  </div>
)

export const Home =()=>(
  <div>
      <HomeWelcome/>
    </div>
  )
