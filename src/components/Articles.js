import React,{Component} from 'react';

import { Container } from './Products'

const prods = [
  {
    url: 'img1.jpg',
    name: 'Avengers: The Final',
    price: '2000',
    stars:1,
    paragraph:
      'Оставшиеся в живых члены команды Мстителей и их союзники должны разработать новый план, который поможет противостоять разрушительным действиям могущественного титана Таноса. После наиболее масштабной и трагической битвы в истории они не могут допустить ошибку.'
  },

  {
    url: 'img2.jpeg',
    name: '1917 (фильм)',
    price: '1600',
    stars:3,
    paragraph:
      '1917 год, разгар Первой мировой войны. Двум юным солдатам поручают смертельно опасную миссию. Они должны пересечь вражескую территорию и доставить секретное сообщение, которое предотвратит неминуемую гибель сотен солдат… Смогут ли они выиграть гонку со временем?'
  },
  {
    url: 'img3.jpg',
    name: 'Pain and glory',
    price: '1800',
    stars:2,
    paragraph:
      'Талантливый кинорежиссер на закате своего творческого пути оглядывается в прошлое, и на него обрушивается поток ярких воспоминаний. Нежные чувства к матери, любовь и расставание, поиски счастья и успеха. Всё это приводит творца к важным размышлениям о жизни и искусстве — боли и славе…'
  }
]

class Article extends Component {
  state = {
    shareData: ''
  }
  constructor (props) {
    super(props)
  }

  toggleSearch = data => {
    this.setState({ shareData: data })
  }

  render () {
    const info = prods.map((item, index) => (
      <Container
        key={index}
        hasce={item.url}
        name={item.name}
        price={item.price}
        paragraph={item.paragraph}
        dataFromInput={this.state.shareData}
        stars={item.stars}
      />
    ))
    return (
      <div className='articles_page'>

        {info}
      </div>
    )
  }
}

export {Article}
