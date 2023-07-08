import {BrowserRouter,Routes,Route} from "react-router-dom";
import Team from "./pages/Team.jsx";
import Update from "./pages/Update.jsx";
import Add from "./pages/Add.jsx";
import "./style.scss"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Team/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
