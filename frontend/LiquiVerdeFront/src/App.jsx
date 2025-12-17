import { useState } from 'react'
import './App.css'
import NavBarApp from './views/components/NavBarApp'
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='routes'>
        <Router>
          <NavBarApp />
        </Router>
      </div>
    </>
  )
}

export default App
