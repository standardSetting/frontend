import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './tachyons.css';
import './index.css';
import page1 from './page1.png'
import NavContainer from './NavContainer';
import NavBar from './NavBar';
import ImageContainer from './ImageContainer';
import createItemNumbers from './helpers/createItemNumbers';
import mapScoresToNav from './helpers/mapScoresToNav';
import ScoreAndNavContainer from './ScoreAndNavContainer';
import ProgressAndSubmitContainer from './ProgressAndSubmitContainer';

/* for testing only. */
const titlesAndLabels = {
  titles: ['Medium Case 1','Medium Case 2','Medium Case 3','Medium Case 4','Medium Case 5','Medium Case 6'],
  labels: [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]],
}

let myMaxScores = []
for (var i=0; i<60; i++) myMaxScores.push(Math.round(9*Math.random()+1));
console.log(myMaxScores)
const maxScores = myMaxScores.slice()
/* */

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
  
  const inputFieldRef = useRef(null)

// style https://shop.acer.edu.au/pat
// TODO make it so when scores array is complete, buttons change from prev, next, to submit scores.
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
      inputFieldRef.current.focus()
    }, 
    [itemNavNumber]
  );

  return (
    <>
    <NavBar />
    <div className='flex justify-between'>
      <div className='flex flex-column imageAndNavButtons mt4'>
        <ImageContainer imgSource={page1}/>
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
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

