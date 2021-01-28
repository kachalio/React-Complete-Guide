// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


// Class based method for creating Components
class App extends Component {
  state = {
    persons: [
      {name : "zack", age: 28},
      {name : "mandy", age: 22},
      {name : "jack", age: 20},
    ]
  }

  // Best practice to use Handler suffix on code that "isn't called by me (aka button click)"
  switchNameHandler = (newName) => {
    // console.log("Was clicked");
    // DONT DO THIS: this.state.persons[0].name = "Zachary"
    this.setState( {
      persons: [
        {name : newName, age: 28},
        {name : "mandy", age: 22},
        {name : "jack", age: 27},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name : "zack", age: 28},
        {name : event.target.value, age: 22},
        {name : "jack", age: 20},
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!!!</p>
        <button 
          style={style} 
          onClick={() => this.switchNameHandler("La Croix!!!!!")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
        />
        <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'ColeBoy 420')}
          changed ={this.nameChangedHandler}>My Hobbies: Some Crap</Person>
        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
        />
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?' ));
  }
}

export default App;
// export default app;



// these are Stateful compononents, they store state internally
// Should really only have a couple of these

// Example of Hooks below
// const app = props => {
//   //Hook method of creating state in function component
//   const [ personState, setPersonsState ] = useState({
//     persons: [
//       {name : "zack", age: 28},
//       {name : "mandy", age: 22},
//       {name : "jack", age: 20},
//     ]
//   });

//   const [otherState, setOtherState] = useState('some new value');

  
//   console.log(personState, otherState);

//   const switchNameHandler = () => {
//     // console.log("Was clicked");
//     // DONT DO THIS: this.state.persons[0].name = "Zachary"
//     setPersonsState( {
//       persons: [
//         {name : "Zachary", age: 28},
//         {name : "mandy", age: 22},
//         {name : "jack", age: 27},
//       ]
//     })
//   }
  
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is working!!!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Some Crap </Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       </div>
      
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?' ));
// }



