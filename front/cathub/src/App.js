import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Header from "./components/Header";
import Breeds from "./pages/Breeds";
import BreedDetails from './pages/BreedDetail';
import Care from './pages/Care';
import Home from './pages/Home';
import GeneralInfo from './pages/GeneralInfo';

function App() {
  return (
    <div className="App bg-neutral-100">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/breeds' element={<Breeds />}/>
            <Route path='breeds/:_id' element={<BreedDetails />} />
            <Route path='/care' element={<Care />} />
            <Route path='/info' element={<GeneralInfo />}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
