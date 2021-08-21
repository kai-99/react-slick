import React, { Component } from "react"
import Slider from "react-slick"

export default class SlickSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <>
        <Slider {...settings}>
          <figure>
            <img
              src="https://fakeimg.pl/350x200/?text=Slider1&font=lobster"
              alt="/"
            />
          </figure>
          <figure>
            <img
              src="https://fakeimg.pl/350x200/?text=Slider2&font=lobster"
              alt="/"
            />
          </figure>
          <figure>
            <img
              src="https://fakeimg.pl/350x200/?text=Slider3&font=lobster"
              alt="/"
            />
          </figure>
        </Slider>
      </>
    )
  }
}
