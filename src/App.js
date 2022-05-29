import Navbar from './Components/Navbar/Navbar';
import Profiles from './Components/Profiles/Profiles';
import Submit from './Components/Submit/Submit';
import Edit from './Components/Edit/Edit';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Profiles />} />
          <Route path='/Submit' element={<Submit />} />
          <Route path='/Update/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
