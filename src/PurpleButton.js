function PurpleButton(props){
    const buttonText = props.buttonText
    return (
        <button className='pointer grow bg-purple ba white pa1 pl3 pr3 b--purple'>
            {buttonText}
        </button>
    )
}

export default PurpleButton;