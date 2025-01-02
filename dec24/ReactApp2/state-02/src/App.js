import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    increment =  ()=>{ 
        this.setState({count : this.state.count + 1 })
    }
    render() {
        console.log("inside the render ");
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>

            </div>
        )
    }

    componentDidUpdate(prevProps , prevState){ 
        // this method gets executed after the every update
        console.log(prevProps , prevState)
    }

    componentDidMount() {
        console.log("After component mouthed")
    }
}


//  const App = ()=>{ 
//     return <h1>App Components</h1>
//  }

/**
 * Life cycle of Phases ;
 * Mouting , Updating , Unmouting  
 * Birth ,   Life ,     Death 
 * 1. In every liffe cycle phase as set of methods get executed. 
 * 
 * => Mouting Phase : Component Creation phase . 
 *      constructor => this get executed only during mounting phase.
 *      render 
 *      componentDidMout => GET EXECUTE ONLY THE MOUTING PHASE
 * => Updating Phase : 
 *      Updating a component can be done either by changing the state of the 
 *      component or props passed into the component. 
 *      rehder => 
 *      componetDidUpate(prevProps , prevState)
 * 
 * => UnMouting Phase : 
 *      componentWillUnMount =>  
 *      
 */


export default App; 