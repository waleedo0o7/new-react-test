import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component  {

  componentDidMount = ()=> {
    this.getData();
  }

  getData(){
    fetch("https://jsonplaceholder.typicode.com/todos",{
      method : "GET" ,
      headers : {"Content-Type": "application/json"}
    }).then(e=>{
      return e.json();
    }).then(res=>{
      console.log(res);
      this.setState({items : res})
    })
  }

  state = {
    name : "02 020 20 20 20",
    age : 16,
    items : []
  }

  render(){
  
    return (
      <div className="App">
  
        <div>

          <p>You clicked {this.state.name} times</p>

          <button onClick={()=>{this.setState({name:"454545454"})}}> 000</button>
        </div>
  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {this.state.items.map((item , index)=> {
          console.log(item ,index);
          return(
              <div className="job-detials" id={index} key={index}>
                  <h3> Job Title  : {item.id} </h3>
                  <p> Type : {item.title}  </p>
                  <p> company : {item.completed}  </p>
                  <p> location : {item.userId}  </p>
              </div>
          )
         } )}
  
      </div>
    );
  }

}

export default App;