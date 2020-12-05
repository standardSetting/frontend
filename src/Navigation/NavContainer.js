function Button(props){
    const borderWidth = props.borderWidth;
    const bgColour = props.bgColour;
    const navButtonLabel = props.navButtonLabel;

    return (
        <div className={`mt1 mr2 mb2 buttonDimensions ba b--purple shadow-4 ${borderWidth} ${bgColour}`}>
            <div className=''>
                <div className='ma2 dark-gray'>{navButtonLabel}</div>
            </div>
        </div>
    )
}

function NavButton(props) {
const navButtonLabel = props.navButtonLabel;
const itemNumber = props.itemNumber;
const itemNavNumber = props.itemNavNumber;
const setItemNavNumber = props.setItemNavNumber;
const scoreMappedToNav = props.scoreMappedToNav;
const displayNumberOutOfRange = props.displayNumberOutOfRange;

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
    {   
        !displayNumberOutOfRange &&
            <div onClick={handleClick} className='grow pointer'>
                <Button borderWidth={borderWidth} bgColour={bgColour} navButtonLabel={navButtonLabel} />
            </div>
    }
    {
        displayNumberOutOfRange &&
            <div className='o-50'>
                <Button borderWidth={borderWidth} bgColour={bgColour} navButtonLabel={navButtonLabel} />
            </div>
    }
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
const displayNumberOutOfRange = props.displayNumberOutOfRange;

for (var i=0; i<numberOfButtons; i++) {
    navButtonArray.push(
        <NavButton
            key={itemNumbers[i]}
            navButtonLabel={labels[i]} 
            itemNumber={itemNumbers[i]}
            itemNavNumber={itemNavNumber}
            setItemNavNumber={setItemNavNumber}
            scoreMappedToNav={scoresMappedToNav[i]}
            displayNumberOutOfRange={displayNumberOutOfRange}
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
const displayNumberOutOfRange = props.displayNumberOutOfRange;
return (
    <>
    {!displayNumberOutOfRange && 
        <div className='f4 purple mt1 b'>{title}</div>}
    {displayNumberOutOfRange && 
        <div className='f4 purple mt1 b o-50'>{title}</div>}
    </>
)
}

function NavRowAndTitle(props) {
const title = props.title;
const labels = props.labels;
const itemNumbers = props.itemNumbers;
const itemNavNumber = props.itemNavNumber;
const setItemNavNumber = props.setItemNavNumber;
const scoresMappedToNav = props.scoresMappedToNav;
const displayNumberOutOfRange = props.displayNumberOutOfRange;

return (
    <div className='mt3 mb3 flex flex-column navSideColumn'>
        <NavTitle 
            title={title}
            displayNumberOutOfRange={displayNumberOutOfRange}
        />
        <NavButtonRow 
            labels={labels} 
            itemNumbers={itemNumbers}
            itemNavNumber={itemNavNumber}
            setItemNavNumber={setItemNavNumber}
            scoresMappedToNav={scoresMappedToNav}
            displayNumberOutOfRange={displayNumberOutOfRange}
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
const displayNumberOutOfRange = props.displayNumberOutOfRange;

    for (var i=0; i<titlesAndLabels.titles.length; i++){
        allRows.push(<NavRowAndTitle 
            key={titlesAndLabels.titles[i]}
            title={titlesAndLabels.titles[i]} 
            labels={titlesAndLabels.labels[i]}
            itemNumbers={itemNumbers[i]}
            itemNavNumber={itemNavNumber}
            setItemNavNumber={setItemNavNumber}
            scoresMappedToNav={scoresMappedToNav[i]}
            displayNumberOutOfRange={displayNumberOutOfRange}
            />
        )
    }
return (
    <>
        <div className='navBarSide br b--purple bw1 shadow-4'>
            <div className='mb4'>
                {allRows}
            </div>
        </div>
    </>
);
}

export default NavContainer;