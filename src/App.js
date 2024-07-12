import { Route, Routes } from "react-router-dom";
import LoginUser from "./components/UI/loginUser";
import CreateUser from "./components/UI/createUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginUser/>}/>
        <Route path="/components/UI/createUser.jsx" element={<CreateUser/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
