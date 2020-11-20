function ArrowLeft(props){
 return (
    <svg className="w1" viewBox="0 0 32 32" >
        <path stroke="none" fill="#5E2CA5" d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
    </svg>
 )
}

function ArrowRight(props) {
    return (
        <svg className="w1" viewBox="0 0 32 32">
            <path stroke="none" fill="#5E2CA5" d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
        </svg>
    )
}

function ButtonContainer(props) {
    return (
        <a className="f5 br2 no-underline purple inline-flex items-center pa3 ba border-box dim pointer">
            {props.children}
        </a>
    )
}

function NavButtons(props) {
    return (
    <div className="flex items-center justify-between pa3">
        <ButtonContainer>
            <ArrowLeft />
            <span class="pl1">Previous</span>
        </ButtonContainer>
        <ButtonContainer>
            <span className="pr1">Next</span>
            <ArrowRight />
        </ButtonContainer>
    </div>
    )
}

export default NavButtons;