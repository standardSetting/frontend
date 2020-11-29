import logo from './logo.svg'

function NavBarText(props) {
  const text = props.text;
  const action = props.action;
  const extraStyle = props.extraStyle;
  return (
    <div onClick={action} className={'flex-grow pl3 pr3 pt2 pb2 flex items-center b--purple bw1 '+extraStyle}>
      <div className="f5 link dib dim purple pointer">{text}</div>
    </div>
  )
}

function NavBar(props){
  const showAboutModal = props.showAboutModal;
  const showInstructionsModal = props.showInstructionsModal;
  const signOut = props.signOut;

    return (
      <nav className="flex justify-between items-center h3 b--purple bb bt navbar bw4">
        <div className="ml4 flex items-end">
          <a href="https://www.acer.org/au" target="_blank">
              <img src={logo} className='mt1'/>
          </a>
          <div className="f3 purple ml3 mb1">Swift</div>
        </div>
        <div className='flex flex-row mr2'>
          <NavBarText action={showAboutModal} text='About standard setting' extraStyle='br' />
          <NavBarText action={showInstructionsModal} text='Instructions' extraStyle='br' />
          <NavBarText action={signOut} text='Sign out' />
        </div>
      </nav>
    )
  } 

  export default NavBar;