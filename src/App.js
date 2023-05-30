import React, { Component } from 'react'
import Info from './components/Info';
import uniqid from "uniqid";
import './App.css'
import root from './index';

class App extends Component {
  constructor(){
    super();
    this.state = {
      info: {
        firstname: { text: '',
          id: uniqid()
        },
        lastname: { text: '',
          id: uniqid()
        },
        email: { text: '',
          id: uniqid()
        },
        schooltitle: { text: '',
          id: uniqid()
        },
        major: { text: '',
          id: uniqid()
        },
        dateofstudy: { text: '',
          id: uniqid()
        },
      }
    }
  }
  render() {
    const info = this.state.info;
    return (
      <div>
        <header>CV App</header>
        <form onSubmit={this.submit}>
        <h1>First, let's get some information about yourself.</h1>
          <label>
            First Name: 
            <input type="text" 
              onChange={this.handleChange}
              value={info.firstname.text}
              id="firstname"
            />
          </label>
          <label>
            Last Name:
            <input type="text" 
              onChange={this.handleChange}
              value={info.lastname.text}
              id="lastname"
            />
          </label>
          <label>
            Email:
            <input type="text" 
              onChange={this.handleChange}
              value={info.email.text}
              id="email"
            />
          </label>
          
        <h1>What's your educational experience?</h1>
        <label>
            School Name:
            <input type="text" 
              onChange={this.handleChange}
              value={info.schooltitle.text}
              id="schooltitle"
            />
          </label>
          <label>
            Major:
            <input type="text" 
              onChange={this.handleChange}
              value={info.major.text}
              id="major"
            />
          </label>
          <label>
            Date of Graduation (or current span):
            <input type="text" 
              onChange={this.handleChange}
              value={info.dateofstudy.text}
              id="dateofstudy"
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
    console.log(e)
    this.setState({
      info: {
        firstname: { text: document.getElementById("firstname").value },
        lastname: { text: document.getElementById("lastname").value },
        email: { text: document.getElementById("email").value },
        schooltitle: { text: document.getElementById("schooltitle").value },
        major: { text: document.getElementById("major").value },
        dateofstudy: { text: document.getElementById("dateofstudy").value },
    }});
  }
  submit = (e) => {
    e.preventDefault();
    root.render(<Info info={this.state}/>)
  }
}


export default App;
