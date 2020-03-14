import React,{Component} from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.contact_container{background-color:rgba(0,0,0,.1);

  box-shadow: 10px 10px 50px #bbb;
  border-radius:30px;
  padding:5%;
  display:grid;
}

.contact_heading{
color:orange;
text-align:center;
}
.contact_name , .contact_email ,.contact_message{
  border:0;
}
.contact_name{
  width:100%;
}
.contact_email{
  width:100%;
}
.contact_message{
  width:100%;
}
.contact_input{
padding:5px;
width:95%;
text-transform:Uppercase;
}
.contact_button{background-color:#AB47BC;
color:white;
text-transform:Uppercase;
font-weight:bold;
;padding:10px;margin:5x;
}
`;


class Contact extends Component{
  constructor(props){
     super(props);
     this.state = {name: '',email:'',message:''};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event){
     const target = event.target;
     //console.log(target.name);
     //target.name <= name of the element which is evented
     this.setState({[target.name]: target.value}); //value of the form element


   }

   handleSubmit(event){
     alert('These are the details : '+this.state.name+' addy: '+this.state.email+' message: '+this.state.message);
   }

   render(){
     return (
       <Styles>
       <form className = "contact_container" onSubmit = {this.handleSubmit}>
         <h3 className="contact_heading">Contact Us</h3>
         <label>
           {/*Name:*/}
           <input className="contact_name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
         </label>
                 <label>
           {/*Email:*/}
           <input className="contact_email" name = "email" type="text" value={this.state.email} onChange={this.handleChange}/>
         </label>
                 <label>
           {/*Message: - I am a coment*/}
           <input className="contact_message" name="message" type="text" value={this.state.message} onChange={this.handleChange}/>
         </label>
         <input className = "contact_button" type="submit" value="Submit"/>
       </form>
       </Styles>
     );
   }
}

export {Contact};
