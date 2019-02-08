import React from 'react';
import ReactDOM from 'react-dom';
import ReactBodymovin from 'react-bodymovin'

import animation from './data.json'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
    }

    this.bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: animation
    }
  }

  render(){
    return (
    <div>
        <ReactBodymovin options={this.bodymovinOptions} />
    </div>

    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
