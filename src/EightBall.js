import React, { useState } from "react";

const EightBall = ({answers}) => {
    const msg = "Think of a Question"
    
    return (
        <div className="EightBall">
            <h1>WORKING!!!</h1>
            <button className="EightBall-btn">{msg}</button>
            <p>{answers[0].msg}</p>
        </div>
    )
}

export default EightBall;