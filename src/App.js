import React from 'react';
import logo from './logo.svg';
import './App.css';


import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from './firebaseConfig';

const firebaseApp = firebase.initializeApp(config);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component{
  render(){
      const { user, signOut, signInWithGoogle,} = this.props;



    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {
              user
                  ? <p>Hello, {user.displayName}</p>
                  : <p>Please sign in.</p>
            }
            {
              user
                  ? <button onClick={signOut}>Sign out</button>
                  : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
          </header>
        </div>
    );
  }
}



export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

