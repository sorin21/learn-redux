import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { createStore } from "redux";
import ButtonGroup from './ButtonGroup';



class App extends Component {
  render() {
    return (
      <div>
        Hello world {store.getState()}
        <ButtonGroup 
          technologies={["React", "Elm", "React-Redux"]}
        />
      </div>
    );
  }
}

export default App;