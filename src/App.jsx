import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)
  let router = useRoutes(routes)

  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        {router}
      </div> 
    </>
  )
}

export default App
