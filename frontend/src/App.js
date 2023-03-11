import './App.css';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
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

  return (
    <>
      <BrowserRouter>
                <div className="pages">
                    <Routes>
                    <Route
                            path='/'
                            element={user ? <Home/> : <Navigate to = '/login'/>}
                        />
                        <Route
                            path='/login'
                            element={!user ? <Login/> : <Navigate to = '/'/>}
                        />
                        <Route
                            path='/signUp'
                            element={!user ? <SignUp/>: <Navigate to = '/'/>}
                        />
                        <Route
                            path='/services'
                            element= {<Services/>}
                        />
                        <Route
                            path='/companies'
                            element= {<Companies/>}
                        />
                        <Route
                            path='/cart'
                            element= {<Cart/>}
                        />
                        <Route
                            path='/admin'
                            element= {<Admin/>}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
    </>
  );
}
export default App;
