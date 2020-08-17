import React, { Component } from 'react';

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import './banner.css';

const SwiperItem = (props) => {
  return (
    <div className="swiper-slide">
      <img src={props.src} />
    </div>
  );
};

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [],
    };
  }
  componentWillMount() {
    fetch('/banner.json')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          banner: result,
        });
        setTimeout(() => {
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
            },
          });
        }, 0);
      })
      .catch((error) => console.log(error));
  }
  renderItem() {
    if (this.state.banner.length) {
      return this.state.banner.map((item, index) => {
        return <SwiperItem key={index} src={item.src} />;
      });
    }
  }
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">{this.renderItem()}</div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
