function BottomContainer(props){
    return (
        <div className='flex justify-center mt2 pb4' style={{height: '240px'}}>
            <div className='ba b--purple shadow-4 br3 pa2 bottomContainer flex flex-column'>
                {props.children}
            </div>
        </div>
    )
}

export default BottomContainer;