import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { UseState } from "./components/UseState";
import { UseEffect } from "./components/UseEffect";
import { UseContext } from "./components/UseContext";

export default function App() {

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/usestate' element={<UseState />} />
          <Route path='/useeffect' element={<UseEffect />} />
          <Route path='/usecontext' element={<UseContext />} />
        </Routes>
      </div>
    </Router>
  );
}
