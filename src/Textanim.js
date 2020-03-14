import React,{Component} from 'react';


class Textanim extends Component{
  componentDidMount(){
      const canvas = this.refs.canvas
      const c = canvas.getContext("2d")
      c.fillStyle = 'hsl(25,100%,50%)';
       let text = 'Welcome to Sahak Coding :)';
       let i=1;
       function draw(){
           c.fillText(text.substr(0,i),100,400);
           i++;
           if(i < text.length){
               requestAnimationFrame(draw);
           }
       }
       requestAnimationFrame(draw);
   }
  render(){
    return(
      <div>
          <canvas ref="canvas" width={640} height={350}  />
      </div>
    )
  }
}


export {Textanim};
