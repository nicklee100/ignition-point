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

import Animation from './animation.js'

const Root = styled.div`
`
const Play = styled.button`
position:absolute;
top:0;
left:0;
z-index:1;
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
      currentAnimation: animationOne ,
      position: 100,
      playedQueue:[],
      animations: [  {file:  animationThree,id:102},{file:animationTwo,id:101},{file:animationOne,id:100}],
      twoplaying:true,
      isPaused: false,

    }
  this.onComplete = this.onComplete.bind(this);
  this.play = this.play.bind(this);
  this.next = this.next.bind(this);
  this.pause = this.pause.bind(this);
  this.previous = this.previous.bind(this);

  this.onClick = this.onClick.bind(this)
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

  playCheck(id){
    return id === this.state.position
  }

  componentDidUpdate(){
    console.log('component updated');
  }

  onClick(){
    this.setState({
      twoplaying: false
    })
  }

  finished(){
    var newStateArray = this.state.playedQueue.slice();
    newStateArray.push(this.state.animations[this.state.animations.length -1])
    this.setState({
      position: this.state.position + 1,
      animations:this.state.animations.slice(0,this.state.animations.length-1),
      playedQueue: newStateArray
    })
  }

  next(){
    console.log('next');
  }

  pause(){
    console.log('pause');
    this.setState({
      isPaused:!this.state.isPaused
    })
  }

  play(){

  }

  previous(){
    console.log('previous');
  }



  render(){
    console.log(this.state);

    return <Root>
              {this.state.animations.map(item => {
                console.log('item:',item);
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
            <Button onClick={this.play}>Play</Button>
            <Button onClick={this.previous}>Previous</Button>
            <Button onClick={this.next}>Next</Button>
      </Root>

  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);



