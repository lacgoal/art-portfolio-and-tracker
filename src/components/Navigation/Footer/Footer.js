import React from 'react';

import classes from './Footer.css';


const footer = (props) => (
  <footer className={classes.Footer}>
    <div>
      <p>Info</p>
      <p>Contact information: <a href="mailto:someone@example.com"> someone@example.com</a>.</p>
    </div>
  </footer>
);


export default footer;
