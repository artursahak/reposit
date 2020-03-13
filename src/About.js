import React from 'react';
import phone from './assets/open.jpg';

export const About = () => (
  <div className="about_page">
        <div className="iphone_cont">
            <img className="iphone_img" src={phone} />
            <img className="iphone_img" src={phone} />
            <img className="iphone_img" src={phone} />
            <img className="iphone_img" src={phone} />
        </div>
        <div className="iphone_text">
          <p>

iPhone 11 Pro и iPhone 11 Pro Max устойчивы к воздействию брызг, воды и пыли и протестированы в специально поддерживаемых лабораторных условиях. Устройства имеют рейтинг IP68 по стандарту IEC 60529 (допускается погружение в воду на глубину до 4 метров длительностью до 30 минут). Устойчивость к воздействию брызг, воды и пыли не является постоянным условием и может снижаться при естественном износе. Не пытайтесь заряжать мокрый iPhone: протрите и высушите его согласно инструкциям в руководстве пользователя. Повреждение в результате контакта с жидкостью не покрывается гарантией.
          </p>
        </div>
    </div>
)
