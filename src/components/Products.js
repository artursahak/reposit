import React, { Component } from 'react'

import BeautyStars from 'beauty-stars';
const prods = [
  {
    url: 'car1.jpg',
    name: 'Avengers',
    price: '2000'
  },
  {
    url: 'perfume1.jpeg',
    name: '1917 (фильм)',
    price: '1600'
  },
  {
    url: 'perfume2.jpg',
    name: 'Pain and glory',
    price: '1800'
  }
]


class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      background: 'darkslategray',
      clicked: false,
      value:this.props.stars,
      size:"16px"
    }
  }

  Reader = () => {
    const show = this.state.clicked
    this.setState({ clicked: !show })
  }


  render () {
    const data = this.props.dataFromInput
    if (data) {

         if("avengers"===data){
            this.setState({
              background:"orange"
            })
          }

    }

    const style1 = {
      background: this.state.background
    }
    const style2 = {
      background: this.state.background,
      height: '70vw'
    }

    let hasce = this.props.hasce
    hasce = require(`./${hasce}`)
    const click = this.state.clicked
    return (
      <div>
        <div className='movie_article' style={click ? style2 : style1}>
          <img className='restrain' src={hasce} />
          <h2>{this.props.name}</h2>
          <p className="lem">{this.props.price}</p>
          <div    className="stars">
          <BeautyStars
       value={this.state.value}
       onChange={value => this.setState({ value })}
       size={this.state.size}

     />
     </div>
          <button className='more' onClick={this.Reader}>
            {click ? 'Show Less' : 'Show More'}
          </button>
          <p>{this.props.paragraph}</p>
        </div>
      </div>
    )
  }
}

export { Container }
