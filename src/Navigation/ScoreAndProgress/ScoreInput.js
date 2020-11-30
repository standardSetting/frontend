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

/*{displayNumberOutOfRange &&
            <div className="f5 purple db mb2 i">{`Please enter a score between 0 and ${maxScores[itemNavNumber-1]}.`}</div>}
            {!displayNumberOutOfRange &&
            <div className="f5 white db mb2 i">{'-'}</div>}*/

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
        <>
        <div className="flex flex-row items-center ba b--purple bg-purple pa2 pl3 pr3 justify-center">
            <label className="white f4 db mt1 mb1 mr3 ">Score:</label>
            <input 
                className="inputField f4 input-reset ba pa2 mt1 mb1 w3 h2 tc bg-white" 
                type="text" 
                value={inputFieldValue}
                onChange={handleInput}
                ref={inputFieldRef}
            />
        </div>
        </>
    )
}

export default ScoreInput;

