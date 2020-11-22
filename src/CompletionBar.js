function CompletionBar(props) {
    const COMPLETION_BAR_WIDTH = '364px'
    const COMPLETION_BAR_HEIGHT = '42px'
    const INNER_COMPLETION_BAR_WIDTH = 362
    const INNER_COMPLETION_BAR_HEIGHT = '40px'

    const numerator = props.numerator;
    const denominator = props.denominator;

    const percentComplete = Math.round(100*(numerator/denominator))
    const percentCompletePixels = (numerator/denominator)*INNER_COMPLETION_BAR_WIDTH+'px'

    return (
        <div className='ma2 mt2 h2 mb2 ba br2' style={{width: COMPLETION_BAR_WIDTH, height: "42px"}}>
            <div 
                className='bg-light-purple br2' 
                style={{width: percentCompletePixels, 
                height: INNER_COMPLETION_BAR_HEIGHT}}>
            </div>
            <div className='mt2 flex  justify-between purple'>
                    <span>
                      {`${numerator} out of ${denominator} items`}
                    </span>
                    <span>
                      {`${percentComplete}% complete`}
                    </span>
            </div>
        </div>
    );

}

export default CompletionBar;