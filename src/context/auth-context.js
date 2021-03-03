import React, { createContext } from 'react';


const auth = React.createContext({
    authenticated: false,
    login: () => {

    },
})


export default auth;