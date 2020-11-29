import PurpleButton from '../PurpleButton'

function Modal(props) {
    const clickOk = props.clickOk;
    const modalTitle = props.modalTitle
    
    return (
        <div className='ba b--purple pa4 br3 bg-white modal selectedBox shadow-4'>            
                <p className='purple b f4 mb4'>{modalTitle}</p>
            <div className='ml2 dark-gray mb4'>
                {props.children}
            </div>
            <div className="flex flex-row-reverse" onClick={clickOk}>
                <PurpleButton buttonText='ok'></PurpleButton>
            </div>
        </div>
    );
}

export default Modal;