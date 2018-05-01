import React, { Component} from 'react';

import ArtPiece from '../../components/ArtPiece/ArtPiece';


class GalleryContainer extends Component {
  render () {
    return (
      <div>
        <h2> Title </h2>  
        <ArtPiece />
        <ArtPiece />
        <ArtPiece />
      </div>
    );
  }
}

export default GalleryContainer;
