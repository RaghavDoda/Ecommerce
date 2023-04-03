import './App.css';
import React from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import Companies from './pages/filtered';
import Cart from './pages/Cart';
import Admin from './pages/adminPage';
import SignUp from './pages/Signup';
import Login from './pages/Signin';
import Buynow from './components/Buynow';

function App() {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={user ? (user.isAdmin ? <Navigate to = '/admin'/> : <Home/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/login'
                    element={!user  ? <Login/> : (user.isAdmin ? <Navigate to = '/admin'/> : <Navigate to = '/'/>)}
                />
                <Route
                    path='/signUp'
                    element={!user  ? <SignUp/>: <Navigate to = '/'/>}
                />
                <Route
                    path='/companies'
                    element= {user  ? (user.isAdmin ? <Navigate to = '/admin'/> : <Companies/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/services'
                    element= {user  ? (user.isAdmin ? <Navigate to = '/admin'/> : <Services/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/cart'
                    element= {user  ? (user.isAdmin ? <Navigate to = '/admin'/> : <Cart/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/buynow'
                    element= {user  ? (user.isAdmin ? <Navigate to = '/admin'/> : <Buynow/>) : <Navigate to = '/login'/>}
                />
                <Route
                    path='/admin'
                    element= {user  ? (user.isAdmin ? <Admin/> : <Navigate to = '/'/>) : <Navigate to = '/login'/>}
                />
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
