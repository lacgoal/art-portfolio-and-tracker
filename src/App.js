import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import GalleryContainer from './containers/GalleryContainer/GalleryContainer';


class App extends Component {
  render() {
    return (
      <div className="App" >
      <Layout >
      <GalleryContainer />

      </Layout>
      </div>
    );
  }
}

export default App;
