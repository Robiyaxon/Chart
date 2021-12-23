import React from 'react';
import "./App.css"
import { BackToTop } from './BackToTop';
import LoginConatiner from './Component/LoginForm/LoginContainer';
import NavbarContainer from './Component/NavbarContainer';
const App = () => {
  return (
   <App2/>
  );
};
const App2 = () => {
  return (
    <div>
      < BackToTop/>
      
      <NavbarContainer/>
      <LoginConatiner/>
    </div>
  );
};
export default App;