import React from 'react';
import {NavLink} from 'react-router-dom';

const Error = () => {
  return (
    <>
     <h1> page not found</h1>
     <NavLink to="/"> go to home </NavLink>
    </>
  )
}

export default Error;