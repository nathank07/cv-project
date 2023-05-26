
import React, { Component } from 'react'
import { createRoot } from 'react-dom';
import Info from './components/Info';
import uniqid from "uniqid";
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      info: {
        text: '',
        id: uniqid()
      }
    }
  }
  render() {
    const info = this.state;
    return (
      <div>
        <header>CV App</header>
        <form onSubmit={() => this.submit(info)}>
        <h1>First, let's get some information about yourself.</h1>
          <label>
            First Name: 
            <input type="text" 
              onChange={this.handleChange}
              value={info.firstname}
            />
          </label>
          <label>
            Last Name:
            <input type="text" 
              onChange={this.handleChange}
              value={info.lastname}
            />
          </label>
          <label>
            Phone Number:
            <input type="text" 
              onChange={this.handleChange}
              value={info.email}
            />
          </label>
          
        <h1>What's your educational experience?</h1>
        <label>
            School Name:
            <input type="text" 
              onChange={this.handleChange}
              value={info.schooltitle}
            />
          </label>
          <label>
            Major:
            <input type="text" 
              onChange={this.handleChange}
              value={info.major}
            />
          </label>
          <label>
            Date of Graduation (or current span):
            <input type="text" 
              onChange={this.handleChange}
              value={info.dateofstudy}
            />
          </label>
          <button type="submit">
            Submit Form
          </button>
        </form>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({
      info: {
        text: e.target.value,
      }
    });
  }
  submit = (info) => {
    const domNode = document.getElementById('root');
    const root = createRoot(domNode);
    root.render(<Info info={info}/>)
  }
}


export default App;
