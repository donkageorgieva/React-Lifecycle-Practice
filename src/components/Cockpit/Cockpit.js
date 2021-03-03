import React, {useEffect, useRef, useContext} from 'react';
import AuthenticationContext from '../../context/auth-context';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
  const btnRef = useRef(null);
  const authContenxt = useContext(AuthenticationContext);
    useEffect(()=> {
     btnRef.current.click();
    }, [])
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
            ref={btnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
 
                  <button onClick={ authContenxt.login}>Log in</button>

           
        </div>
    );
};

export default cockpit;