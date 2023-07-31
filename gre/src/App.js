import logo from './logo.svg';
import Home from './Home.js';
import Practice from './Practice.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Practice.js" element={<Practice />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
