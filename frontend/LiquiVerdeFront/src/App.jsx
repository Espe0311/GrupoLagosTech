import { useState, useEffect } from 'react';
import './App.css';
import NavBarApp from './views/components/NavBarApp';
import ProductsList from './views/ProductsList';
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Routes} from "react-router-dom";

function App() {
  const [badgeCount, setCount] = useState(() => {
    return Number(localStorage.getItem('cartItems')) || 0;
  });

  useEffect(() => {
    localStorage.setItem('cartItems', badgeCount);
  }, [badgeCount]);

  const update = () => setCount((c) => c + 1);

  return (
    <>
      <div className='routes'>
        <Router>
          <NavBarApp cartItems={badgeCount}/>
          <Routes>
            <Route path="/" element={<ProductsList addToCart={update}/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
