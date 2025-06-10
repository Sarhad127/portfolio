import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pluto from "./Pluto/Pluto";
import Clique from "./Clique/Clique";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pluto" element={<Pluto />} />
            <Route path="/Clique" element={<Clique />} />
        </Routes>
      </Router>
  );
}

export default App;