import NavButtons from './NavButtons';
import ScoreInput from './ScoreInput';
import BottomContainer from './BottomContainer';

function ScoreAndNavContainer(props) {
    const itemNavNumber = props.itemNavNumber;
    const setItemNavNumber = props.setItemNavNumber;
    const scores = props.scores;
    const setScores = props.setScores;
    const maxScores = props.maxScores;
    const maxItemNavNumber = props.maxItemNavNumber;
    const inputFieldValue = props.inputFieldValue;
    const setInputFieldValue = props.setInputFieldValue;
    const displayNumberOutOfRange = props.displayNumberOutOfRange;
    const setDisplayNumberOutOfRange = props.setDisplayNumberOutOfRange;
    const inputFieldRef = props.inputFieldRef;
    const displayFinalSubmitButton = props.displayFinalSubmitButton;

    return (
        <BottomContainer>
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
            <NavButtons 
              scores={scores}
              itemNavNumber={itemNavNumber}
              maxItemNavNumber={maxItemNavNumber} 
              setItemNavNumber={setItemNavNumber}
              displayFinalSubmitButton={displayFinalSubmitButton}
              />
      </BottomContainer>
    )
  }

  export default ScoreAndNavContainer;