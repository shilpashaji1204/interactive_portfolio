import React, { Component } from "react";

class ThreeScene extends Component {

  render(){
    return(
      <div 
      ref = {mount => {
        this.mount = mount;

      }
      }
    )
  }
}

export default ThreeScene;