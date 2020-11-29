import React from 'react';
import NavContainer from './NavContainer';
import NavBar from './NavBar';
import ImageContainer from './ImageContainer';
import ScoreAndNavContainer from './ScoreAndNavContainer';
import ProgressAndSubmitContainer from './ProgressAndSubmitContainer';
import Footer from './Footer'

function NavMain(props){
const itemNavNumber = props.itemNavNumber;
const inputFieldValue = props.inputFieldValue;
const setInputFieldValue = props.setInputFieldValue;
const setScores = props.setScores;
const maxScores = props.maxScores;
const displayNumberOutOfRange = props.displayNumberOutOfRange;
const setDisplayNumberOutOfRange = props.setDisplayNumberOutOfRange;
const inputFieldRef = props.inputFieldRef;
const displayFinalSubmitButton = props.displayFinalSubmitButton;
const numberOfScoresComplete = props.numberOfScoresComplete;
const maxItemNavNumber = props.maxItemNavNumber;
const scores = props.scores;
const titlesAndLabels = props.titlesAndLabels;
const itemNumbers = props.itemNumbers;
const setItemNavNumber = props.setItemNavNumber;
const scoresMappedToNav = props.scoresMappedToNav;
const showAboutModal = props.showAboutModal;
const showInstructionsModal = props.showInstructionsModal;
const signOut = props.signOut;
const completionButtonClick = props.completionButtonClick;

return (
  <>
    <div>
      <NavBar 
        showAboutModal={showAboutModal}
        showInstructionsModal={showInstructionsModal}
        signOut={signOut}
      />
    </div>
      <div>
      <div className='flex justify-between'>
        <div className='flex flex-column imageAndNavButtons'>
          <ImageContainer imgSource={`${process.env.PUBLIC_URL}/images/page${itemNavNumber.toString()}.png`}/>
          <div className='mt4 flex flex-row flex-wrap justify-center'>
            <div className='ml4 mr4'>
              <ScoreAndNavContainer 
                inputFieldValue={inputFieldValue}
                setInputFieldValue={setInputFieldValue}
                itemNavNumber={itemNavNumber}
                maxItemNavNumber={maxItemNavNumber} 
                setItemNavNumber={setItemNavNumber}
                scores={scores}
                setScores={setScores}
                maxScores={maxScores}
                displayNumberOutOfRange={displayNumberOutOfRange}
                setDisplayNumberOutOfRange={setDisplayNumberOutOfRange}
                inputFieldRef={inputFieldRef}
                displayFinalSubmitButton={displayFinalSubmitButton}
                />
              </div>
              <div className='ml4 mr4'>
                <ProgressAndSubmitContainer 
                  numerator={numberOfScoresComplete}
                  denominator={maxItemNavNumber}
                  scores={scores}
                  completionButtonClick={completionButtonClick}
                  />  
              </div>
          </div>
        </div>
        <NavContainer
          titlesAndLabels={titlesAndLabels} 
          itemNumbers={itemNumbers}
          itemNavNumber={itemNavNumber}
          setItemNavNumber={setItemNavNumber}
          scoresMappedToNav={scoresMappedToNav}
        />
      </div>
    </div>
    <Footer />
    </>
    )
}

export default NavMain;