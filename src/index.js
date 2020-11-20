import React from 'react';
import ReactDOM from 'react-dom';
import './tachyons.css';
import './index.css';
import page1 from './page1.png'
//import App from './App';
import NavContainer from './NavContainer';
import NavButtons from './NavButtons';
import ScoreInput from './ScoreInput';
import NavBar from './NavBar';
import ImageContainer from './ImageContainer'


const titlesAndLabels = {
  titles: ['Medium Case 1','Medium Case 2','Medium Case 3','Medium Case 4','Medium Case 5','Medium Case 6'],
  labels: [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]]
}

function ScoreAndNavContainer(props) {
  return (
    <div className='flex justify-center mt2 pb5'>
      <div className='ba b--purple shadow-4 br3 pa2 ScoreAndNavContainer flex flex-column'>
          <ScoreInput />
          <NavButtons />
      </div>
    </div>

  )
}
function App() {
  return (
    <>
    <NavBar />
    <div className='flex justify-between'>
      <div className='flex flex-column imageAndNavButtons mt4'>
        <ImageContainer imgSource={page1}/>
        <div className='mt4'>
            <ScoreAndNavContainer />
        </div>
      </div>
      <NavContainer  titlesAndLabels={titlesAndLabels}/>
    </div>
    </>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


