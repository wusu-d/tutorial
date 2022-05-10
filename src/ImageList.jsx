import { Component } from 'react';

class ImageList extends Component {
  remderImage() {
    return this.props.images.map((image) => {
      return (
        <div key={image.id}>
          <img src={image.urls.regular} alt="" />
        </div>
      );
    });
  }
  render() {
    return <div>{this.remderImage()}</div>;
  }
}

export default ImageList;
