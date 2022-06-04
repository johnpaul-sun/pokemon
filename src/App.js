import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';
import Pokedex from './Pages/Pokedex';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/pokedex" element={<Pokedex />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
