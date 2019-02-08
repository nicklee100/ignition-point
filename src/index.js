import React from 'react';
import ReactDOM from 'react-dom';
//import ReactBodymovin from 'react-bodymovin'
import ReactBodymovin from 'react-bodymovin/lib/ReactBodymovinFull'
import Lottie from 'react-lottie';

import styled from 'styled-components'

import animation from './Frame1.json'
import animationTwo from './Frame2.json'
import animationThree from './Frame3.json'

const BodyMovingContainer = styled.div`
  width: 700px;
  height:500px;
`

class App extends React.Component {
  constructor(){
    super()
    this.state = {
    }
    this.bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: animation,

    }


    this.bodymovinOptionsTwo = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: animationTwo
    }
    this.bodymovinOptionsThree = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: animationThree
    }


    this.lottieOptions = {
      loop: false,
      autoplay: true,
      animationData: animationThree,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      },


    };

  }

  render(){



    return (<div>
    <BodyMovingContainer>
        <ReactBodymovin options={this.bodymovinOptions} />
    </BodyMovingContainer>
    <BodyMovingContainer>
        <ReactBodymovin options={this.bodymovinOptionsTwo} />
    </BodyMovingContainer>
    <BodyMovingContainer>
        <ReactBodymovin options={this.bodymovinOptionsThree} />
    </BodyMovingContainer>
      <Lottie options={this.lottieOptions}
        height={400}
        width={500}
        eventListeners = {[
          {
            eventName:'complete',
            callback: () => console.log('animation complete')
          }

        ]}

      />

      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);



