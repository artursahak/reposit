import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/Navigation';
import { Jumbotron,Footer } from './components/Jumbotron';
import './App.css';

class App extends Component{
   render(){
     return(
       // React Bootstrap library component
      <React.Fragment>
      <NavigationBar />
      <Jumbotron />
           <Layout>
            // we define router here
           <Router>
                <Switch>
                     <Route exact path="/" component={Home} />
                  // here we are declaring our routes to components :
                     <Route path="/about" component={About} />
                     <Route path="/contact" component={Contact} />
                     <Route component={NoMatch} />
                </Switch>
           </Router>
           </Layout>
           <Footer/>
      </React.Fragment>
     );
   }
}

export default App;
