import logo from '../logo.svg'

function LoginLogoutContainer(props) {
const Width = props.Width;

return (
<>
    <div className='loginContainer mt5'>
        <div className='bg-white ba br4 b--purple shadow-4' style={{width: Width}}>
            <div className="flex justify-center">
                <div>
                    <div className="flex flex-row items-end mt5">
                        <img src={logo} />
                        <div className="f3 purple ml3">Swift</div>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default LoginLogoutContainer;

