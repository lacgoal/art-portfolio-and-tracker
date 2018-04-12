import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Footer from '../Navigation/Footer/Footer';

const layout = ( props ) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>

    <Footer />
  </Aux>

);

export default layout;
