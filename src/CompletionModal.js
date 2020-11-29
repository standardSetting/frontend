import PurpleButton from './PurpleButton'

function CompletionModal(props) {
    const clickOk = props.clickOk;
    const clickFinalSubmit = props.clickFinalSubmit;
    
    return (
        <div className='ba b--purple pa4 br3 bg-white modal selectedBox shadow-4'>            
                <p className='purple b f4 mb4'>Submit scores</p>
            <div className='dark-gray mb4'>
                <p>Are you sure you would like to submit your scores?</p>
                <p>Once you submit them you cannot change them.</p>
            </div>
            <div className="flex flex-row justify-between">
                <div onClick={clickOk}>
                    <PurpleButton buttonText='Cancel'></PurpleButton>
                </div>
                <div onClick={clickFinalSubmit}>
                    <PurpleButton buttonText='Submit'></PurpleButton>
                </div>
            </div>
        </div>
    );
}

export default CompletionModal;