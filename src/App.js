import Hello from './routes/Hello'
import ThinkReact from './routes/ThinkReact'
import Error from './routes/404'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './app.css'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className='container'>
        {/* <img src={require('./react-logo.png')} alt='react-logo' style={{width: "30px"}}></img> */}
          <NavLink to="">Home</NavLink>
          <NavLink to="ThinkReact">Think React</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="ThinkReact" element={<ThinkReact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
