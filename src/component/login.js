import React from 'react'
import {GoogleLogin} from 'react-google-login';
import {GoogleLogout} from 'react-google-login';
export default function login() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:',res.profileObj);
        
      };

      
    
      const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
      };

      const onLogout = (res) =>{
        console.log('logged out: currentUser:',res);
        console.log("Logged out ! see you soon 👋");
      }
    
    return (
        <div>
            <h1>😀🤠🏴󠁧󠁢󠁥󠁮󠁧󠁿😆</h1>
      <GoogleLogin
        clientId={"212944207848-aqt3et7cbg3r950l87j509879df79kos.apps.googleusercontent.com"}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />

<GoogleLogout
        clientId={"212944207848-aqt3et7cbg3r950l87j509879df79kos.apps.googleusercontent.com"}
        buttonText="Logout"
        onLogoutSuccess = {onLogout}
        
      />
    </div>
    )
}
