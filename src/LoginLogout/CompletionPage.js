import LoginLogoutContainer from './LoginLogoutContainer'

function CompletionPage(props){
    const Width = '500px'
    
    return (
    <LoginLogoutContainer Width={Width}>
        <div>
            <p className='purple mt5'>Thank you for completing this standard setting task.</p>
            <p className='purple'>Your scores have been saved.</p>
            <p className='purple mb5'>Your College and ACER will be in touch about next steps.</p>
        </div>
    </LoginLogoutContainer>
);
}

export default CompletionPage;