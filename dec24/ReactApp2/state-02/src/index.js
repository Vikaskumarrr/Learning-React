import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FunctionalComponent from './functionalComponent';
import { Input } from './input';
import EffectExample from './Effects';
/**
 * Life cycle phases / methods of a react component 
 * useState Hook 
 * Assignment
 */




const root = ReactDOM.createRoot(document.getElementById('root'));

class Toggle extends Component { 
  constructor(props){ 
    super(props) 
    this.state = {show : true}
  }

  ToggleApp = ()=>{ 
    this.setState({show : !this.state.show});
  };

  render(){ 
    return ( 
      <>
      <button onClick={this.ToggleApp}>Toggle The Component</button>
      {this.state.show && <App/>}
      </>
    )
  }
}



root.render(<EffectExample />)
