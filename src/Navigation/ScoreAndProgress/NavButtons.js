import ButtonContainer from './ButtonContainer'
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

function LeftButton(props){
    return (
        <ButtonContainer>
            <ArrowLeft />
            <span className="pl1 b">Previous</span>
        </ButtonContainer>
    );
}

function RightButton(props){
    return (
        <ButtonContainer>
            <span className="pr1 b">Next</span>
            <ArrowRight />
        </ButtonContainer>
    )
}

function NavButtons(props) {
    const itemNavNumber = props.itemNavNumber;
    const setItemNavNumber = props.setItemNavNumber;
    const maxItemNavNumber = props.maxItemNavNumber; 
    const maxScores = props.maxScores;
    const inputFieldRef = props.inputFieldRef;
    const inputFieldValue = props.inputFieldValue;
    const setInputFieldValue = props.setInputFieldValue;
    const displayNumberOutOfRange = props.displayNumberOutOfRange;

    const maxScore = maxScores[itemNavNumber-1]

    function goToPreviousItem(e){
        e.preventDefault();
        setItemNavNumber(prevValue => prevValue - 1)
    }

    function goToNextItem(e){
        e.preventDefault();
        setItemNavNumber(prevValue => prevValue + 1)
    }

    return (
        <>
    <div className="mt3 mb3 flex flex-row justify-around items-center">
        {
            (itemNavNumber > 1) && (
                (displayNumberOutOfRange && 
                    <div className='o-50'>
                        <LeftButton />
                    </div>)
            )
        }
        {
            (itemNavNumber > 1) && (
                (!displayNumberOutOfRange && 
                    <div className='pointer grow' onClick={goToPreviousItem}>
                        <LeftButton />
                    </div>)
            )
        }
        {
            (itemNavNumber === 1) && 
            <div style={{width: '121px'}}>
            </div>
        }
        <div>
            <ScoreInput 
                inputFieldValue={inputFieldValue}
                setInputFieldValue={setInputFieldValue}
                inputFieldRef={inputFieldRef}
                displayNumberOutOfRange={displayNumberOutOfRange}
                setItemNavNumber={setItemNavNumber}
                itemNavNumber={itemNavNumber}
                maxItemNavNumber={maxItemNavNumber}
            />
        </div>
        {
            (itemNavNumber !== maxItemNavNumber) && (
                (!displayNumberOutOfRange && 
                <div className='grow flex justify-center pointer grow' onClick={goToNextItem}  style={{width: '116px'}}>
                    <RightButton />
                </div>)
            ) 
        }  
        {
            (itemNavNumber !== maxItemNavNumber) && (
                (displayNumberOutOfRange && 
                <div className='o-50 flex justify-center' style={{width: '116px'}}>
                    <RightButton />
                </div>)
            ) 
        }  
        {
            (itemNavNumber === maxItemNavNumber) &&    
                <div className='ba mt1 br2 b--purple shadow-1 bw1 b bg-white flex justify-center grow pointer' style={{width: '116px', height: '55px'}}>
                    <div className='h2 pa3 f5 purple'>
                        Submit
                    </div>
                </div>
        }  
    </div>
        {
            displayNumberOutOfRange &&
                <div className='ml2 tc dark-red f6'>
                    Please enter a score between 0 and {maxScore}.
                </div>
        }
    </>
    );
}

export default NavButtons;