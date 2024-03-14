import './App.css';
import MuiSignUp from './components/auth/MuiSignUp';
import MuiLogin from './components/auth/MuiLogIn';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './components/Dashboard';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route 
            path='/' 
            element= 
            {<div>
              <MuiSignUp/>
              {/* <SignIn/>
              <SignUp/> */}
            </div>} 
          />
          <Route
            path='/login'
            element={<MuiLogin/>}
          />
          <Route
            path='/dashboard'
            element={<Dashboard/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
