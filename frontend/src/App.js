import './App.css';
import React from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

import useAuthContext  from './hooks/useAuthContext';
// pages
import Home from './pages/Home';
import Services from './pages/Services';
import Companies from './pages/filtered';
import Cart from './pages/Cart';
import Admin from './pages/adminPage';
import SignUp from './pages/Signup';
import Login from './pages/Signin';

function App() {
    const {user} = useAuthContext()
    // const user2 = JSON.parse(localStorage.getItem('user'))
    console.log("ethe")
    console.log(user)
    
    // console.log(JSON.stringify(user))
    // console.log(user2)

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={user!=null ? (user.isAdmin ? <Navigate to = '/admin'/> : <Home/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/login'
                    element={user==null  ? <Login/> : (user.isAdmin ? <Navigate to = '/admin'/> : <Navigate to = '/'/>)}
                />
                <Route
                    path='/signUp'
                    element={user==null  ? <SignUp/>: <Navigate to = '/'/>}
                />
                <Route
                    path='/companies'
                    element= {user!=null  ? (user.isAdmin ? <Navigate to = '/admin'/> : <Companies/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/services'
                    element= {user!=null  ? (user.isAdmin ? <Navigate to = '/admin'/> : <Services/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/cart'
                    element= {user!=null  ? (user.isAdmin ? <Navigate to = '/admin'/> : <Cart/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/admin'
                    element= {user!=null  ? (user.isAdmin ? <Admin/> : <Navigate to = '/'/>) : <Navigate to = '/login'/>}
                />
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
