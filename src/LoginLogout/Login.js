import LoginLogoutContainer from './LoginLogoutContainer'
import PurpleButton from '../PurpleButton'

function Login(props){
const clickLogin = props.clickLogin;
const Width = '350px';

return (  
    <LoginLogoutContainer Width={Width}>
        <div className="flex flex-column w5 mt5">
            <label className='purple'>Session Name</label>
            <input className='f5'/>
        </div>
        <div className="flex flex-column w5 mt4">
            <label className='purple'>Examiner Code</label>
            <input className='f5'/>
        </div>
        <div className="flex flex-column mt4 w5 mb5">
            <label className='purple'>Password (just click sign in for now)</label>
            <input className='f5' type="password"/>
        </div>
        <div className="flex flex-row-reverse mb5" onClick={clickLogin}>
            <PurpleButton buttonText='Sign in'></PurpleButton>
        </div>
    </LoginLogoutContainer>
);

}

export default Login;