import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
//import {connect} from 'react-redux';

const items = [
  {
    src: 'https://www.moafrikatours.com/wp-content/uploads/2016/02/Soweto-Towers_Low-Resolution-1.jpg',
    altText: 'Slide 1',
    caption: 'Not clear that North Korea'
  },
  {
    src: 'http://www.slate.com/content/dam/slate/articles/news_and_politics/roads/2014/07/140717_RK_Soweto_Commandos.jpg.CROP.promovar-mediumlarge.jpg',
    altText: 'Slide 2',
    caption: 'Russia 2018: Croatia World Cup squad '
  },
  {
    src: 'https://sowetourban.co.za/wp-content/uploads/sites/112/2015/03/protest-protea-Medium.jpg',
    altText: 'Slide 3',
    caption: 'NATO summit: Trump accuses Germany of being a captive'

  }
];

class TopHead extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{height: 350, width: 800}} />
          <CarouselCaption captionHeader={item.caption}/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
       
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default TopHead;