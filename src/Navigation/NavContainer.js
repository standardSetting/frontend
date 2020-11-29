function NavButton(props) {
const navButtonLabel = props.navButtonLabel;
const itemNumber = props.itemNumber;
const itemNavNumber = props.itemNavNumber;
const setItemNavNumber = props.setItemNavNumber;
const scoreMappedToNav = props.scoreMappedToNav;

function handleClick(e){
    e.preventDefault();
    setItemNavNumber(itemNumber)
}

let borderWidth
let bgColour
itemNavNumber === itemNumber ? borderWidth = 'bw1' : borderWidth = '';
scoreMappedToNav === '' ? bgColour = 'white' : bgColour = 'bg-moon-gray'

return (
    <>
    <div onClick={handleClick} className={`mt1 mr2 mb2 buttonDimensions ba br3 b--purple shadow-4 grow pointer ${borderWidth} ${bgColour}`}>
        <div className=''>
            <div className='ma2 dark-gray'>{navButtonLabel}</div>
        </div>
    </div>
    </>
)
}

function NavButtonRow(props) {
const labels = props.labels;
const itemNumbers = props.itemNumbers;
const numberOfButtons = props.labels.length;
const navButtonArray = []
const itemNavNumber = props.itemNavNumber;
const setItemNavNumber = props.setItemNavNumber;
const scoresMappedToNav = props.scoresMappedToNav;

for (var i=0; i<numberOfButtons; i++) {
    navButtonArray.push(
        <NavButton
            key={itemNumbers[i]}
            navButtonLabel={labels[i]} 
            itemNumber={itemNumbers[i]}
            itemNavNumber={itemNavNumber}
            setItemNavNumber={setItemNavNumber}
            scoreMappedToNav={scoresMappedToNav[i]}
        />)
    }
return (
    <div className='flex flex-row flex-wrap'>
    {navButtonArray}
    </div>
)
}

function NavTitle(props) {
const title = props.title;
return (
    <div className='f4 purple mt1 b'>{title}</div>
)
}

function NavRowAndTitle(props) {
const title = props.title;
const labels = props.labels;
const itemNumbers = props.itemNumbers;
const itemNavNumber = props.itemNavNumber;
const setItemNavNumber = props.setItemNavNumber;
const scoresMappedToNav = props.scoresMappedToNav;

return (
    <div className='mt3 mb3 flex flex-column'>
    <NavTitle title={title}/>
    <NavButtonRow 
        labels={labels} 
        itemNumbers={itemNumbers}
        itemNavNumber={itemNavNumber}
        setItemNavNumber={setItemNavNumber}
        scoresMappedToNav={scoresMappedToNav}
        />
    </div>
)
}

function NavContainer(props) {
const allRows = []
const titlesAndLabels = props.titlesAndLabels;
const itemNumbers = props.itemNumbers;
const itemNavNumber = props.itemNavNumber;
const setItemNavNumber = props.setItemNavNumber;
const scoresMappedToNav = props.scoresMappedToNav;

    for (var i=0; i<titlesAndLabels.titles.length; i++){
        allRows.push(<NavRowAndTitle 
            key={titlesAndLabels.titles[i]}
            title={titlesAndLabels.titles[i]} 
            labels={titlesAndLabels.labels[i]}
            itemNumbers={itemNumbers[i]}
            itemNavNumber={itemNavNumber}
            setItemNavNumber={setItemNavNumber}
            scoresMappedToNav={scoresMappedToNav[i]}
            />
        )
    }
return (
    <>
        <div className='navBarSide br b--purple bw1 shadow-4 ml3'>
                {allRows}
        </div>
    </>
);
}

export default NavContainer;