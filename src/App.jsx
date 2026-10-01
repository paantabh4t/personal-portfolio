import './index.css'
import Home from './routes/Home'
import About from './routes/About'
import Project from './routes/Project'
import Contact from './routes/Contact'
import { Navigate, Route, Routes } from 'react-router-dom'



function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Contact/>} />
      {/* any unknown URL goes back to Home */}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
            
  </>
  )
}

export default App
