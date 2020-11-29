function CompletionBar(props) {
    const COMPLETION_BAR_WIDTH = '182px'
    const COMPLETION_BAR_HEIGHT = '21px'
    const INNER_COMPLETION_BAR_WIDTH = 180
    const INNER_COMPLETION_BAR_HEIGHT = '19px'

    const numerator = props.numerator;
    const denominator = props.denominator;

    const percentComplete = Math.round(100*(numerator/denominator))
    const percentCompletePixels = (numerator/denominator)*INNER_COMPLETION_BAR_WIDTH+'px'

    return (
        <div className='ma2 mt2 h2 mb2 ba br2' style={{width: COMPLETION_BAR_WIDTH, height: COMPLETION_BAR_HEIGHT}}>
            <div 
                className='br2 bg-aubergine' 
                style={{width: percentCompletePixels,
                height: INNER_COMPLETION_BAR_HEIGHT}}>
            </div>
            <div className='mt2 flex justify-center purple'>
                    <span>
                      {`${percentComplete}% complete`}
                    </span>
            </div>
        </div>
    );

}

export default CompletionBar;