import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Register } from "./components/Form";
import { Success } from "./components/Success";
import { useState } from "react";
import { Application } from "./components/Styles/styles";


function App() {
  const [registeredInfo, setRegisteredInfo] = useState();
  return (
    <Application>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Register setRegisteredInfo={setRegisteredInfo} />}
          />
          <Route
            path="/registered"
            element={<Success registeredInfo={registeredInfo} />}
          />
        </Routes>
      </BrowserRouter>
    </Application>
  );
}

export default App;