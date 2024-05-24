import './App.css'
import Wrapper from "./components/Wrapper.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import SubAdd from "./pages/SubAdd.tsx";
import Sub from "./pages/Sub.tsx";
import SubEdit from "./pages/SubEdit.tsx";

function App() {

  return (
      <>
          <BrowserRouter>
             <Wrapper>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/sub" element={<Sub/>}/>
                  <Route path="/addSub" element={<SubAdd/>}/>
                  <Route path="/editSub/:id" element={<SubEdit/>}/>
              </Routes>
            </Wrapper>
          </BrowserRouter>

      </>
  )
}

export default App
