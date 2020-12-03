function ButtonContainer(props) {
    return (
        <a className="f5 no-underline purple inline-flex items-center pa3 ba border-box b--purple">
            {props.children}
        </a>
    );

}

export default ButtonContainer;