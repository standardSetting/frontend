import logo from './logo.svg'

function NavBarText(props) {
  const text = props.text;
  const action = props.action;
  return (
    <div onClick={action} className="flex-grow pa3 flex items-center">
      <div className="f5 link dib dim ml3 mr4-ns purple pointer">{props.text}</div>
    </div>
  )
}

function NavBar(props){
  const showAboutModal = props.showAboutModal;
  const showInstructionsModal = props.showInstructionsModal;
  const signOut = props.signOut;


  //TODO put swift next to ACER logo
    return (
      <nav className="flex justify-between h3 b--purple bb shadow-4">
        <a className="flex items-center" href="https://www.acer.org/au" target="_blank">
          <img className="ml4" src={logo} />
        </a>
        <NavBarText action={showAboutModal} text='About standard setting' />
        <NavBarText action={showInstructionsModal} text='Instructions' />
        <NavBarText action={signOut} text='Sign out' />
      </nav>
    )
  } 

  export default NavBar;