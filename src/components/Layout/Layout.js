import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = ( props ) => (
  <Aux>
    <div> Header, Navbar </div>
    <main className={classes.Content}>
      {props.children}
    </main>
        <div> Footer </div>
  </Aux>

);

export default layout;
