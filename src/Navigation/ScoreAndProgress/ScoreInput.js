import React, { useState, useRef } from 'react';

function ScoreInput(props) {
    const scores = props.scores;
    const setScores = props.setScores;
    const maxScores = props.maxScores;
    const itemNavNumber = props.itemNavNumber;
    const inputFieldRef = props.inputFieldRef;
    const inputFieldValue = props.inputFieldValue;
    const setInputFieldValue = props.setInputFieldValue;
    const displayNumberOutOfRange = props.displayNumberOutOfRange;
    const setDisplayNumberOutOfRange = props.setDisplayNumberOutOfRange;

    console.log(scores)

    function handleInput(e){
        e.preventDefault()
        let score = e.target.value;
        if (Number(score) >= 0 && Number(score) <= maxScores[itemNavNumber-1]){
            setInputFieldValue(score)
            setDisplayNumberOutOfRange(false)
        } else {
            score = ''
            setInputFieldValue(score)
            setDisplayNumberOutOfRange(true)
        }

        let newScores = scores.slice()
        newScores[itemNavNumber - 1] = score
        setScores(newScores)
    }

    return (
    <div className="mt2 flex items-center justify-center">
        <div className="">
            <input 
                className="inputField f4 input-reset ba pa2 mb2 w-100 tc" 
                type="text" 
                value={inputFieldValue}
                onChange={handleInput}
                ref={inputFieldRef}
            />
            <div className="f5 purple db mb2">Enter a score for the minimally competent candidate</div>
            {displayNumberOutOfRange &&
            <div className="f5 purple db mb2 i">{`Please enter a score between 0 and ${maxScores[itemNavNumber-1]}.`}</div>}
            {!displayNumberOutOfRange &&
            <div className="f5 white db mb2 i">{'-'}</div>}
            
        </div>
    </div>
    )
}

export default ScoreInput;