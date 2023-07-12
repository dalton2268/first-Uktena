import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SearchBox from './components/SearchBox';

import viteLogo from '/vite.svg'
import './App.css'
import { FaMagnifyingGlass } from 'react-icons/fa6';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
              <button onClick={() => setCount((count) => count + 10) }>
                  count is {count}
              </button>
              <SearchBox />
      </div>

    </>
  )
}
export default App
