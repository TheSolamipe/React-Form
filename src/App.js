import React from 'react';
import WrappedRegistrationForm from './components/login/Login';
//import { FirebaseContext } from './components/Firebase';

class App extends React.Component {
//const App = ()=>(
//  <FirebaseContext.Consumer>
//    {firebase => {
//    }}
//  </FirebaseContext.Consumer>);
  render(){
      return (
        <div >
          <WrappedRegistrationForm />
        </div>
      )


  }}

export default App;
