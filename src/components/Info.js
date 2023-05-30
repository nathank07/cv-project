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
            <h3>Work Experience:</h3>
        </div>
    );
}

export default Info;