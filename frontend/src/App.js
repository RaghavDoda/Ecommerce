import './App.css';
import {BrowserRouter , Routes , Route  } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Services from './pages/Services';
import Companies from './pages/filtered';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
                <div className="pages">
                    <Routes>
                        <Route
                            path='/'
                            element= {<Home/>}
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
                    </Routes>
                </div>
            </BrowserRouter>
    </>
  );
}
export default App;
