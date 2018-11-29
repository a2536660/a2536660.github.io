require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


let yeomanImage = require('../images/yeoman.png');
let iconImage = require('../images/Icon-180.png');

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <img src={iconImage} alt="icon" />
        <span>hellow 2221</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
