import Hello from './routes/Hello'
import ThinkReact from './routes/ThinkReact'
import ReactUi from './routes/ReactUI'
import AddingInteractivity from './routes/AddingInteractivity'
import ManagingState from './routes/ManagingState'
import Error from './routes/404'
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './app.css'


export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className='container'>
        {/* <img src={require('./images/react-logo.png')} alt='react-logo' style={{width: "30px"}}></img> */}
          <NavLink to="">Home</NavLink>
          <NavLink to="ThinkReact">Think React</NavLink>
          <NavLink to="ReactUi">React UI</NavLink>
          <NavLink to="InteractiveReact">React Interactivity</NavLink>
          <NavLink to="ManagingState">Managing React State</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="ThinkReact" element={<ThinkReact />} />
        <Route path="ReactUI" element={<ReactUi />} />
        <Route path="InteractiveReact" element={<AddingInteractivity />} />
        <Route path="ManagingState" element={<ManagingState />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}
