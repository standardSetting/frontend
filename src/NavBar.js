import logo from './logo.svg'

function NavBarText(props) {
  const text = props.text;
  return (
    <div className="flex-grow pa3 flex items-center">
      <div className="f5 link dib dim ml3 mr4-ns purple pointer">{props.text}</div>
    </div>
  )
}

function NavBar(props){
    return (
      <nav className="flex justify-between h3 b--purple bb shadow-4">
        <a className="flex items-center" href="https://www.acer.org/au" target="_blank">
          <img className="ml4" src={logo} />
        </a>
        <NavBarText text='About standard setting' />
        <NavBarText text='Standard setting instructions' />
        <NavBarText text='Sign out' />
      </nav>
    )
  } 

  export default NavBar;