import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import { CSSTransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

import animationOne from './Frame1.json'
import animationTwo from './Frame2.json'
import animationThree from './Frame3.json'

import Animation from './animation.js'

const Root = styled.div`
`
const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
`
const Button = styled.button`
  border: solid 1px black;
  padding:1em;

`
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentAnimation: animationOne,
      position: 100,
      playedQueue:[],
      animations: [  {file:  animationThree,id:102},{file:animationTwo,id:101},{file:animationOne,id:100}],
      isPaused: false,
    }

  this.next = this.next.bind(this);
  this.pause = this.pause.bind(this);
  this.previous = this.previous.bind(this);
  this.finished = this.finished.bind(this)
  this.playCheck = this.playCheck.bind(this)
  }

  lottieOptions(animation,play){
    return {
      loop: false,
      autoplay: play,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  }

  playCheck(id){
    return id === this.state.position
  }

  componentDidUpdate(){
    console.log('component did updated');
  }

  finished(){
    const newStateArray = this.state.playedQueue.slice();
    newStateArray.push(this.state.animations[this.state.animations.length -1])
    this.setState({
      position: this.state.position + 1,
      animations:this.state.animations.slice(0,this.state.animations.length-1),
      playedQueue: newStateArray
    })
  }

  next(){
    this.finished()
  }

  pause(){
    this.setState({
      isPaused:!this.state.isPaused
    })
  }

  previous(){
    const playQueue = this.state.playedQueue.slice(0,this.state.playedQueue.length - 1)
    this.setState({
      playedQueue: playQueue,
      animations: this.state.animations.concat(this.state.playedQueue[this.state.playedQueue.length-1]),
      position: this.state.position - 1,
    })
  }

  render(){

    return <Root>
              {this.state.animations.map(item => {
                return (
                  <Container key={item.id}>
                    <Lottie
                      options={this.lottieOptions(item.file,this.playCheck(item.id))}
                      height={550}
                      width={770}
                      isStopped={!this.playCheck(item.id)}
                      isPaused={this.state.isPaused}
                      eventListeners = {[
                        {
                          eventName:'complete',
                          callback: this.finished
                        }
                      ]}
                    />
                  </Container>
                )
              })}
            <Button onClick={this.pause}>{this.state.isPaused ? 'play' : 'pause' }</Button>
            <Button onClick={this.previous}>Previous</Button>
            <Button onClick={this.next}>Next</Button>
      </Root>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
