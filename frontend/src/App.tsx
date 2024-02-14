import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Room } from './Room'
import { Landing } from './component/Landing'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Landing/>}/>
        <Route path="/room" element = {<Room/>}/>

      </Routes>
        
    </BrowserRouter>
  )
}

export default App
