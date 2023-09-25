import { Route, BrowserRouter } from 'react-router-dom';

import Form from "./components/pages/form/form"
import Detail from "./components/pages/detail/detail"
import Home from "./components/pages/home/home"
import './App.css';

function App() {
  return (
<BrowserRouter>    
      <div>
        <Route exact path ="/home" component= {Home}/>
        <Route path ="/home/:id" component= {Detail}/>
        <Route path ="/form" component= {Form}/>
      </div>
  </BrowserRouter>  
  );
}

export default App;
