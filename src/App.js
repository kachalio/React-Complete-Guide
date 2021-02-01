// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


// Class based method for creating Components
class App extends Component {

  //State should be your 1* source of data 
  state = {
    persons: [
      {id : "2354", name : "zack", age: 28},
      {id : "1234",  name : "mandy", age: 22},
      {id : "6780",  name : "jack", age: 20},
    ],
    showPersons : false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    
    const person =  {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({, this.state.persons[personIndex]});

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] =  person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
    console.log("Show Persons: " + !doesShow)
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} 
              />
          })}
        </div>
      );
    }

 
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working!!!</p>
        <button 
          style={style} 
          onClick={() => this.togglePersonsHandler()}>Switch Name</button>
          {persons}
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



