import React from 'react';

import rgLogo from '../../assets/images/rg-banner.png';
import classes from './Logo.css';


const logo = (props) => (
  <div className={classes.Logo}>
    <img src={rgLogo} alt="Rocky Greco" />
  </div>
);

export default logo;
