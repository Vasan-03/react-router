import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Abouts from './Pages/Abouts';

import Nav from './Components/Nav';

function App() {
  return (
<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/abouts" element={<Abouts/>} />
  <Route path="/contact" element={<Contact/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
