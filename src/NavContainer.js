function NavButton(props) {
const navButtonLabel = props.navButtonLabel;
return (

    <>
    <div className={'mt1 mr2 mb2 buttonDimensions ba br3 b--purple shadow-4 dim pointer'}>
        <div className=''>
            <div className='ma2 navy'>{navButtonLabel}</div>
        </div>
    </div>
    </>
)
}

function NavButtonRow(props) {
const labels = props.labels;
const numberOfButtons = props.labels.length;
const navButtonArray = []
    for (var i=0; i<numberOfButtons; i++) {
    navButtonArray.push(<NavButton navButtonLabel={labels[i]}/>)
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
    <div className='f4 purple'>{title}</div>
)
}

function NavRowAndTitle(props) {
const title = props.title;
const labels = props.labels;
return (
    <div className='mt3 mb3 ml3'>
    <NavTitle title={title}/>
    <NavButtonRow labels={labels} />
    </div>
)
}

function NavContainer(props) {
const allRows = []
const titlesAndLabels = props.titlesAndLabels;
    for (var i=0; i<titlesAndLabels.titles.length; i++){
    allRows.push(<NavRowAndTitle title={titlesAndLabels.titles[i]} labels={titlesAndLabels.labels[i]}/>)
    }
return (
    <>
    <div className='navBarSide bl b--purple bw1 shadow-4'>
        {allRows}
    </div>
    </>
)

}

export default NavContainer;