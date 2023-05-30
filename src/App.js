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
        },
        lastname: { text: '',
        },
        email: { text: '',
        },
        schooltitle: { text: '',
        },
        major: { text: '',
        },
        dateofstudy: { text: '',
        },
        work: [  {
          jobtitle: {
            text: '',
          },
          dateofwork: {
            text: '',
          },
          id: uniqid()
        } ]
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
          <h1>What's your work experience?</h1>
          <div className='work'></div>
          {info.work.map((job) => {
            return <div key={job.id} id={job.id}>
                    <label>
                    Job title:
                        <input type="text"
                            onChange={this.handleChange}
                            value={job.jobtitle.text}
                            id={job.id + "1"}
                            key={job.id + "1"}
                        />
                    </label>
                    <label>
                    Span of work:
                        <input type="text"
                            onChange={this.handleChange}
                            value={job.dateofwork.text}
                            id={job.id + "2"}
                            key={job.id + "2"}
                        />
                    </label>
                   </div>
        })}
          <button className="plus" onClick={this.addWork}>
            +
          </button>
          <button type="submit">
            Submit Form
          </button>
        </form>
      </div>
    )
  }
  handleChange = () => {
    this.setState({
      info: {
        firstname: { text: document.getElementById("firstname").value },
        lastname: { text: document.getElementById("lastname").value },
        email: { text: document.getElementById("email").value },
        schooltitle: { text: document.getElementById("schooltitle").value },
        major: { text: document.getElementById("major").value },
        dateofstudy: { text: document.getElementById("dateofstudy").value },
        work: this.state.info.work.map((job) => ({
          jobtitle: {
            text: document.getElementById(job.id + "1").value,
          },
          dateofwork: {
            text: document.getElementById(job.id + "2").value,
          },
          id: job.id,
        }))
    }});
  }
  submit = (e) => {
    e.preventDefault();
    root.render(<Info info={this.state}/>)
  }
  addWork = (e) => {
    e.preventDefault()
    const work = ({
      jobtitle: {
        text: '',
      },
      dateofwork: {
        text: '',
      },
      id: uniqid()
    })
    this.setState({
      info: {
        firstname: { text: document.getElementById("firstname").value },
        lastname: { text: document.getElementById("lastname").value },
        email: { text: document.getElementById("email").value },
        schooltitle: { text: document.getElementById("schooltitle").value },
        major: { text: document.getElementById("major").value },
        dateofstudy: { text: document.getElementById("dateofstudy").value },
        work: this.state.info.work.concat(work)
      }
    })
  }
}


export default App;
