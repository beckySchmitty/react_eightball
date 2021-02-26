import React, { useState } from "react";

const EightBall = ({answers}) => {
    const [msg, changeMsg] = useState('Think of a Question');
    const [color, changeColor] = useState('black')

    const ranAnswer = () => answers[Math.floor(Math.random() * answers.length)];

    const clickedBall = () => {
        changeMsg(ranAnswer().msg);
        changeColor(ranAnswer().color);
    }

    const btnStyle = {
        backgroundColor: `${color}`,
        color: 'white'
    }

    const reset = () => {
        changeMsg('Think of a Question');
        changeColor('Black');

    }
    
    return (
        <div className="EightBall">
            <h1>Magic Eight Ball</h1>
            <button onClick={clickedBall} style={btnStyle} className="EightBall-btn">{msg}</button>
            <button onClick={reset} className="EightBall-reset-btn">Reset</button>
        </div>
    )
}

export default EightBall;