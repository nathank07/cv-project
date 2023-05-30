import React from 'react';

function Info(props) {
    const { info } = props.info;
    return(
        <div className="Overlay">
            <h2>Hi! My name is {info.firstname.text} {info.lastname.text} and you can contact me at {info.email.text}!</h2>
            <h3>Education:</h3>
            <div>School: {info.schooltitle.text}</div>
            <div>Major: {info.major.text}</div>
            <div>Date of Study: {info.dateofstudy.text}</div>
            {info.work.filter(job => job.jobtitle.text && job.dateofwork.text).length > 0 ? <h3>Work Experience:</h3> : null}
            {info.work.filter(job => job.jobtitle.text && job.dateofwork.text).map((job) => {
                return <div>Worked at <b>{job.jobtitle.text}</b> during <b>{job.dateofwork.text}</b></div>
            })}
        </div>
    );
}

export default Info;