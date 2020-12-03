import { useRef } from 'react';

function ScoreInput(props) {
    const inputFieldRef = props.inputFieldRef;
    const inputFieldValue = props.inputFieldValue;
    const setInputFieldValue = props.setInputFieldValue;
    const displayNumberOutOfRange = props.displayNumberOutOfRange;
    const setItemNavNumber = props.setItemNavNumber;

    useRef(()=>{
        inputFieldRef.addEventListener('onclick', ()=>{console.log('ok?')})
    }, [])
    
    function handleInput(e){
        setInputFieldValue(e.target.value)
    }

    function handleKeyPress(e){
        if (!displayNumberOutOfRange && e.key === 'Enter') {
            setItemNavNumber(prevValue => prevValue + 1)
        }
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
                onKeyPress={handleKeyPress}
                ref={inputFieldRef}
            />
        </div>
        </>
    )
}

export default ScoreInput;

