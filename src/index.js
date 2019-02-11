import React from 'react';
import ReactDOM from 'react-dom';
//import ReactBodymovin from 'react-bodymovin'
//import ReactBodymovin from 'react-bodymovin/lib/ReactBodymovinFull'
import Lottie from 'react-lottie';
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

import animationOne from './Frame1.json'
import animationTwo from './Frame2.json'
import animationThree from './Frame3.json'

const Root = styled.div`
`

const container = styled.div`
  position:relative;
  top:0;
  right:0;
  height:500px;
  width:700px
`

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentAnimation: animationOne ,
      animations: [animationOne, animationTwo, animationThree],
      twoplaying:false,

    }

  this.onComplete = this.onComplete.bind(this);
  this.playNext = this.playNext.bind(this);

  }



  lottieOptions(animation,play){
    return {
      loop: false,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

  }


  onComplete () {
    console.log('animation complete')
    let index = this.state.animations.indexOf(this.state.currentAnimation);
    console.log('index', index++);
    const next =  this.state.animations[index]
    this.setState(
      {
        currentAnimation: this.state.animations[index]
      }
    )
  }

  componentDidUpdate(){
    console.log('component updated');
  }

  playNext(){
    this.setState({
      twoplaying:true
    })
  }

  render(){



    return <Root>

       <Lottie options={this.lottieOptions(this.state.currentAnimation, true)}
        height={500}
        width={700}
        eventListeners = {[
          {
            eventName:'complete',
            callback: this.onComplete
          }
        ]}
      />

      {/* <Lottie options={this.lottieOptions(this.state.animations[1],false)}
        height={500}
        width={700}
        isstopped={this.state.twoplaying}
        eventListeners = {[
          {
            eventName:'complete',
            callback: function(){
              console.log('complete');
            }
          }
        ]}
      /> */}

      </Root>

  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);



