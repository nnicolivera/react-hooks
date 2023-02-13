import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { UseState } from "./components/UseState";
import { UseEffect } from "./components/UseEffect";
import { UseContext } from "./components/UseContext";
import { UseReducer } from "./components/UseReducer";
import { UseCallback } from "./components/UseCallback";
import { UseMemo } from "./components/UseMemo";
import { UseRef } from "./components/UseRef";

export default function App() {

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/usestate' element={<UseState />} />
          <Route path='/useeffect' element={<UseEffect />} />
          <Route path='/usecontext' element={<UseContext />} />
          <Route path='/usereducer' element={<UseReducer />} />
          <Route path='/usecallback' element={<UseCallback />} />
          <Route path='/usememo' element={<UseMemo />} />
          <Route path='/useref' element={<UseRef />} />
        </Routes>
      </div>
    </Router>
  );
}
