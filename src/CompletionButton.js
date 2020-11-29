function CompletionButtonGeneric(props){
    const extraStyle = props.extraStyle;

    return (
        <div className='flex justify-center'>
            <div className={'ba pl5 pr5 mt1 br2 b--purple '+extraStyle}>
                <div className='h2 ma2 tc flex justify-center items-center purple'>
                    Click to submit all scores
                </div>
            </div>
        </div>
    )
}

function CompletionButton(props){
    const scores = props.scores;
    const completionButtonClick = props.completionButtonClick;
    let readyToClick = false
    if (scores.filter(x => x === '').length === 0) readyToClick = true;
    return (
        <>
        {readyToClick &&
        <div className='mt5'>
            <div className='grow pointer' onClick={completionButtonClick}>
                <CompletionButtonGeneric extraStyle={'shadow-1 bw1 b bg-white'}/>
            </div>
        </div>}
        {!readyToClick &&
        <div className='mt5'>
            <div className='o-50'>
                <CompletionButtonGeneric extraStyle={''}/>
            </div>
        </div>}
        </>
        
    );
}

export default CompletionButton;