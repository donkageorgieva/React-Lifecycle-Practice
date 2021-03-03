import React, {Component} from 'react';
// import { render } from 'react-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import withClass from '../../../hoc/Auxiliary/withClass';
import PropTypes from 'prop-types';
import AuthenticationContext from '../../../context/auth-context'


import classes from './Person.css';

class Person extends Component  {
  constructor(props){
    super(props),
    this.element = React.createRef();
  }
  componentDidMount(){
  this.element.current.focus();
  
  }
  static contextType = AuthenticationContext;

  render(){
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
      <p key='i1'onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>
      <p key='i2'>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} 
      value={this.props.name} key='i3'
      // ref={(inputElement)=> this.element = inputElement}/>
      ref ={this.element}/>
  
      {this.context.authenticated? <p>Authenticated</p> : <p>Not authenticated</p>}

     

      </React.Fragment>
  
    )
  
    ;

};
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}
export default withClass(Person, classes.Person);
