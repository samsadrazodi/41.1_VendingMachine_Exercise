import VendingMachine from './VendinMachine';
import Cokes from './Cokes';
import IceCreams from './IceCreams';
import Sandwiches from './Sandwiches';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <Navbar /> */}

   <Routes>
   <Route exact path='/' element={<VendingMachine />} />
   <Route exact path='/Cokes' element={<Cokes />} />
   <Route exact path='/Icecreams' element={<IceCreams />} />
   <Route exact path='/Sandwiches' element={<Sandwiches />} />
   </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
