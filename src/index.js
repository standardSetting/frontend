import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './tachyons.css';
import './index.css';
import createItemNumbers from './helpers/createItemNumbers';
import mapScoresToNav from './helpers/mapScoresToNav';
import NavMain from './NavMain'
import Login from './Login'
import InstructionsModal from './InstructionsModal'
import AboutModal from './AboutModal'
import CompletionModal from './CompletionModal'
import CompletionPage from './CompletionPage'

for (var i=1; i<=60; i++){
      var img=new Image();
      img.src=`${process.env.PUBLIC_URL}/images/page${i.toString()}.png`;
}

/* for testing only. */
const titlesAndLabels = {
  titles: ['Medium Case 1','Medium Case 2','Medium Case 3','Medium Case 4','Medium Case 5','Medium Case 6'],
  labels: [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]],
}

let myMaxScores = []
for (var i=0; i<60; i++) myMaxScores.push(Math.round(9*Math.random()+1));
console.log(myMaxScores)
const maxScores = myMaxScores.slice()
/* end for testing only */

// looks like a hook but is not, just array destructuring
const [itemNumbers, maxItemNavNumber] = createItemNumbers(titlesAndLabels);

function App() {

  const [itemNavNumber, setItemNavNumber] = useState(1);
  const [scores, setScores] = useState(Array(maxItemNavNumber).fill(''))
  const [inputFieldValue, setInputFieldValue] = useState('')
  const [scoresMappedToNav, setScoresMappedToNav] = useState(mapScoresToNav(scores, titlesAndLabels))
  const [displayNumberOutOfRange, setDisplayNumberOutOfRange] = useState(false)
  const [displayFinalSubmitButton, setDisplayFinalSubmitButton] = useState(false)
  const [numberOfScoresComplete, setNumberOfScoresComplete] = useState(0)

  const [renderLoginPage, setRenderLoginPage] = useState(true)
  const [renderNavMain, setRenderNavMain] = useState(false)
  const [renderCompletionPage, setRenderCompletionPage] = useState(false)
  const [renderCompletionModal, setRenderCompletionModal] = useState(false)
  const [renderInstructionsModal, setRenderInstructionsModal] = useState(false)
  const [renderAboutModal, setRenderAboutModal] = useState(false)

  const [screenTooSmall, setScreenTooSmall] = useState(false)
  
  const inputFieldRef = useRef(null)

  
  function loginToNav(){
    setRenderNavMain(true)
    setRenderInstructionsModal(false)
    setRenderAboutModal(false)
    setRenderCompletionModal(false)
    setRenderLoginPage(false)
    setRenderCompletionPage(false)
  }

  function showAboutModal(){
    setRenderNavMain(true)
    setRenderInstructionsModal(false)
    setRenderAboutModal(true)
    setRenderCompletionModal(false)
    setRenderLoginPage(false)
    setRenderCompletionPage(false)
  }

  function showInstructionsModal(){
    setRenderNavMain(true)
    setRenderInstructionsModal(true)
    setRenderAboutModal(false)
    setRenderCompletionModal(false)
    setRenderLoginPage(false)
    setRenderCompletionPage(false)
  }

  function signOut(){
    setRenderNavMain(false)
    setRenderInstructionsModal(false)
    setRenderAboutModal(false)
    setRenderCompletionModal(false)
    setRenderLoginPage(true)
    setRenderCompletionPage(false)
  }

  function clickOk(){
    setRenderNavMain(true)
    setRenderInstructionsModal(false)
    setRenderAboutModal(false)
    setRenderCompletionModal(false)
    setRenderLoginPage(false)
    setRenderCompletionPage(false)
  }

  function completionButtonClick(){
    setRenderNavMain(true)
    setRenderInstructionsModal(false)
    setRenderAboutModal(false)
    setRenderCompletionModal(true)
    setRenderLoginPage(false)
    setRenderCompletionPage(false)
  }

  function clickFinalSubmit(){
    setRenderNavMain(false)
    setRenderInstructionsModal(false)
    setRenderAboutModal(false)
    setRenderCompletionModal(false)
    setRenderLoginPage(false)
    setRenderCompletionPage(true)
  }
  
// TODOs
// style like this https://shop.acer.edu.au/pat (ongoing)

useEffect(
    () => {
      setScoresMappedToNav(mapScoresToNav(scores, titlesAndLabels))
      scores.indexOf('') === -1 ? setDisplayFinalSubmitButton(true) : setDisplayFinalSubmitButton(false)
      setNumberOfScoresComplete(scores.filter(x => x !== '').length)
    }, 
    [scores]
  );

  useEffect(
    () => {
      setInputFieldValue(scores[itemNavNumber-1])
      setDisplayNumberOutOfRange(false)
      if (renderNavMain) inputFieldRef.current.focus();
    }, 
    [itemNavNumber]
  );

  return (
    <> 
    {renderLoginPage && !screenTooSmall && <Login clickLogin={loginToNav}/>}
    {renderNavMain && 
      <NavMain
        completionButtonClick={completionButtonClick}
        showAboutModal={showAboutModal}
        showInstructionsModal={showInstructionsModal}
        signOut={signOut}
        setRenderInstructionsModal={setRenderInstructionsModal}
        itemNavNumber={itemNavNumber}
        inputFieldValue={inputFieldValue}
        setInputFieldValue={setInputFieldValue}
        maxItemNavNumber={maxItemNavNumber}
        setItemNavNumber={setItemNavNumber}
        scores={scores}
        setScores={setScores}
        maxScores={maxScores}
        displayNumberOutOfRange={displayNumberOutOfRange}
        setDisplayNumberOutOfRange={setDisplayNumberOutOfRange}
        inputFieldRef={inputFieldRef}
        displayFinalSubmitButton={displayFinalSubmitButton}
        numberOfScoresComplete={numberOfScoresComplete}
        maxItemNavNumber={maxItemNavNumber}
        scores={scores}
        titlesAndLabels={titlesAndLabels}
        itemNumbers={itemNumbers}
        itemNavNumber={itemNavNumber}
        setItemNavNumber={setItemNavNumber}
        scoresMappedToNav={scoresMappedToNav}
      />}
    {renderInstructionsModal && <InstructionsModal modalTitle='Instructions' clickOk={clickOk}/>}
    {renderAboutModal && <AboutModal modalTitle='About standard setting' clickOk={clickOk}/>}
    {renderCompletionModal && <CompletionModal clickOk={clickOk} clickFinalSubmit={clickFinalSubmit}/>}
    {renderCompletionPage && <CompletionPage></CompletionPage>}
  </>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

