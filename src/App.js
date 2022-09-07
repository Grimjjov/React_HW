
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";
import Home from "./pages/General/Home";
import Popular from "./pages/Popular/index"
import Battle from "./pages/Battle/index"
import Nav from "./pages/General/Nav"
import Results from "./pages/Battle/Results";

const App = () => {
    return(
      <BrowserRouter>
      <div className='container'>
      <Nav />
        <Routes>        
          <Route path='/' element={<Home/>}/>      
          <Route path='popular' element={<Popular/>}/>      
          <Route path='battle' element={<Battle/>}/>   
          <Route path='battle/results' element={<Results />}/>
          <Route render={() => <p>Not Found</p>}/>
        </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App



