import React from 'react';
import App from '../App'

export default function Work(props) {
    const { work } = props;
    console.log(props);
    function handleChange() {
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
            }))
        }});
      }
    return <div>
        {work.map((job) => {
            console.log(job.function)
            return <div key={job.id} id={job.id}>
                    <label>
                    Job title:
                        <input type="text"
                            onChange={handleChange}
                            value={job.jobtitle.text}
                            id={job.id + "1"}
                        />
                    </label>
                    <label>
                    Span of work:
                        <input type="text"
                            onChange={handleChange}
                            value={job.dateofwork.text}
                            id={job.id + "2"}
                        />
                    </label>
                   </div>
        })}
    </div>
    
}

