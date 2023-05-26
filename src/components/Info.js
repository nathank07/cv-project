import React from 'react';

function Info(props) {
    const { info } = props;

    return(
        <div className="Overlay">
            <h2>Hi! My name is {info.firstname} {info.lastname} and you can contact me at {info.email}!</h2>
            <h3>Education:</h3>
            <div>School:{info.schooltitle}</div>
            <div>Major:{info.major}</div>
            <div>Date of Study:{info.dateofstudy}</div>
            <h3>Work Experience:</h3>
        </div>
    );
}

export default Info;