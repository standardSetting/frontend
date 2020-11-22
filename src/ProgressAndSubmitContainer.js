import BottomContainer from './BottomContainer'
import CompletionBar from './CompletionBar'
import CompletionButton from './CompletionButton'

function ProgressAndSubmitContainer(props){
    const numerator = props.numerator;
    const denominator = props.denominator;
    const scores = props.scores;

    return (
        <>
            <BottomContainer>
                <CompletionBar numerator={numerator} denominator={denominator}/>
                <CompletionButton scores={scores}/>
            </BottomContainer>
        </>
    )
}

export default ProgressAndSubmitContainer;