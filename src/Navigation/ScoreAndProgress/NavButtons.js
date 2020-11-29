import ButtonContainer from './ButtonContainer'
import CompletionBar from './CompletionBar'
import ScoreInput from './ScoreInput';

function ArrowLeft(props){
 return (
    <svg className="w1" viewBox="0 0 32 32" >
        <path stroke="none" fill="#5E2CA5" d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
    </svg>
 )
}

function ArrowRight(props) {
    return (
    <svg className="w1" viewBox="0 0 32 32">
        <path stroke="none" fill="#5E2CA5" d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
    </svg>
    )
}

function NavButtons(props) {
    const itemNavNumber = props.itemNavNumber;
    const setItemNavNumber = props.setItemNavNumber;
    const maxItemNavNumber = props.maxItemNavNumber; 
    const numberOfScoresComplete = props.numberOfScoresComplete;
    const scores = props.scores;
    const setScores = props.setScores;
    const maxScores = props.maxScores;
    const inputFieldRef = props.inputFieldRef;
    const inputFieldValue = props.inputFieldValue;
    const setInputFieldValue = props.setInputFieldValue;
    const displayNumberOutOfRange = props.displayNumberOutOfRange;
    const setDisplayNumberOutOfRange = props.setDisplayNumberOutOfRange;

    function goToPreviousItem(e){
        e.preventDefault();
        setItemNavNumber(prevValue => prevValue - 1)
    }

    function goToNextItem(e){
        e.preventDefault();
        setItemNavNumber(prevValue => prevValue + 1)
    }

    return (
    <div className="pa3 flex flex-row justify-between items-center">
        {
            (itemNavNumber > 1) && 
            <div className='grow' onClick={goToPreviousItem}>
                <ButtonContainer>
                    <ArrowLeft />
                    <span className="pl1">Previous</span>
                </ButtonContainer>
            </div>
        }
        {
            (itemNavNumber === 1) && 
            <div className='w1 h1'></div> 
        }
        <div>
            <ScoreInput 
                inputFieldValue={inputFieldValue}
                setInputFieldValue={setInputFieldValue}
                itemNavNumber={itemNavNumber}
                scores={scores}
                setScores={setScores}
                maxScores={maxScores}
                displayNumberOutOfRange={displayNumberOutOfRange}
                setDisplayNumberOutOfRange={setDisplayNumberOutOfRange}
                inputFieldRef={inputFieldRef}
            />
        </div>
        {
            (itemNavNumber !== maxItemNavNumber) &&    
            <div className='grow' onClick={goToNextItem}>
                    <ButtonContainer>
                        <span className="pr1">Next</span>
                        <ArrowRight />
                    </ButtonContainer>
              </div>
        }  
    </div>
    );
}

export default NavButtons;