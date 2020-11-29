import Modal from './Modal'

function InstructionsModal(props){
    const clickOk = props.clickOk;
    const modalTitle = props.modalTitle;

    return (
        <Modal modalTitle={modalTitle} clickOk={clickOk}>
            <p>Standard setting is the process of emperically determining a cutscore.</p>
            <p>Cutscores are important for high-stakes assessment, and used to determine which candidates are competent.</p>
            <p>You are ensuring this assessment is defensible by completing this standard setting task.</p>
        </Modal>
    )
}

export default InstructionsModal;

