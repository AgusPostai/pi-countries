import { Routes, Route} from "react-router-dom";
import Form from "./components/pages/form/Form"
import Detail from "./components/pages/detail/Detail"
import Home from "./components/pages/home/Home"
import './App.css';
import LandingPage from "./components/pages/LandingPage";


function App() {
  return (
    <div>
<Routes>    
        <Route exact path ="/home" element={<Home />}/>
        <Route path ="/home/:id" element={<Detail />}/>
        <Route path ="/form" element={<Form />}/>
        <Route path ="/" element={<LandingPage />}/>
</Routes>  
</div>
  );
};

export default App;
