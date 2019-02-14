import React from 'react';

import Lottie from 'react-lottie';
import styled from 'styled-components'


export default class Animcation extends React.Component(){

  constructor(){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Lottie
        options={this.lottieOptions(props.file,props.autoPlay)}
        height={250}
        width={270}
        isStopped={props.isStopped}
        eventListeners = {[
          {
            eventName:'complete',
            callback: this.finished
          }
        ]}
      />
    )
  }
}
