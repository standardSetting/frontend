import Modal from './Modal'

function InstructionsModal(props){
    const clickOk = props.clickOk;
    const modalTitle = props.modalTitle;

    return (
        <Modal modalTitle={modalTitle} clickOk={clickOk}>
            <p>Consider the assessment item shown and the maximum mark and use this to determine a score for the minimally competent candidate.</p>
            <p>Switch between items with the previous and next buttons, or the buttons to the left. You may sign out and return, your progress is automatically saved.</p>
            <p>A submission button will appear when you have filled in all your scores. You may not change your scores after final submission.</p>
        </Modal>
    )
}

export default InstructionsModal;