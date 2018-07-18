import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Navs from './components/Navs';
import SimpleSlider from './components/Carousel';
import Columns from './components/Columns';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
  render() {  //display or retreive
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Navs/>
          <SimpleSlider/>
          <br/>
          <br/>
          <br/>
          <Columns/>
        </header>
        <body>
        
        </body>
        <footer className="Foot">
        <div class="fb-like" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/" data-width="150"
          data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true">
        </div>

          <div className="address">
          <middle>Last updated on <time datetime="2018-06-01">June 1st, 2018</time></middle>

            <p>
            Hosted by RayRapsTshepi
            </p>
            <address>
              Unit 18, Leogem Commercial Park<br />
              Richards Drive<br />
              Midrand
            </address>
            <p>&#169; 2018 RRT</p>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
