import React from 'react';
import Carousel from 'nuka-carousel';


var Home;

var Decorators = [{
  component: React.createClass({
    render() {
      return (
        <span
          onClick={this.props.previousSlide}
          className="glyphicon glyphicon-chevron-left">
        </span>
      )
    }
  }),
  position: 'CenterLeft',
  style: {
    padding: 20,
    color: 'white',
    fontSize: 50
  }
},{
  component: React.createClass({
    render() {
      return (
        <span
          onClick={this.props.nextSlide}
          className="glyphicon glyphicon-chevron-right">
        </span>
      )
    }
  }),
  position: 'CenterRight',
  style: {
    padding: 20,
    color: 'white',
    fontSize: 50
  }
}];

export default Home = () => (
  <div>
    <div className='Site-content Featured'>
      <Carousel autoplay={ true } wrapAround={ true } speed={ 1500 } decorators={Decorators} className='picSlider'>
        <a>
          <center className='featureImage'>
            <img role="presentation" src="../../assets/products/product1.png"/>
          </center>
          <h2><span>product 1</span></h2>
        </a>

        <a>
          <center className='featureImage'>
            <img role="presentation" src="../../assets/products/product2.png"/>
          </center>
          <h2><span>product 2</span></h2>
        </a>

        <a>
          <center className='featureImage'>
            <img role="presentation" src="../../assets/products/product3.png"/>
          </center>
          <h2><span>product 3</span></h2>
        </a>
      </Carousel>
    </div>

    <div className='my-container'>
      <blockquote className='col-md-9'>Peony Garden Inc. is a new company based in San Francisco that aims to introduce and bring elegant and absolutely high quality porcelains to Americans. Our factory back in China had spent about 20 years on studying the special Lu Ceramics, which has been awarded as National Intangible Cultural Heritage. Our philosophy is to make creative, modern porcelains with health and environment concerns.
      We believe we could show a different feeling of China with our consummate craft and the efforts of our brilliant designers.</blockquote>

      <img src='../../assets/aboutUs1.png' />
    </div>

  </div>
);

    // <hr/>

    // <div className="album text-muted">
    //   <div className="container">
    //     <div className="row">
    //       <div className="card col-md-4">
    //         <img src="../../assets/products/product1.png" height="280" width="300" alt="Card image cap"/>
    //         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //       </div>

    //       <div className="card col-md-4">
    //         <img src="../../assets/products/product2.png" height="280" width="300" alt="Card image cap"/>
    //         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //       </div>

    //       <div className="card col-md-4">
    //         <img src="../../assets/products/product3.png" height="280" width="300" alt="Card image cap"/>
    //         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
