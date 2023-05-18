import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/component/NavBar";
import Barang from "./Pages/Barang";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Barang />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Login />} />
          {/* 
        <Route path="about" element={<About />} />
        
        <Route path="products/:id" element={<Product />} />
        <Route path="products" element={<Experience />} />
        <Route path="workforce" element={<Skills />} />
        <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
