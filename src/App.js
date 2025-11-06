import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pluto from "./Pluto/Pluto";
import Clique from "./Clique/Clique";
import SpringSecurityTests from './SpringSecurityTests/SpringSecurityTests'
import Budget from "./Budget/Budget";
import Movies from "./Movies/Movies";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pluto" element={<Pluto />} />
          <Route path="/Clique" element={<Clique />} />
          <Route path="/SpringSecurityTests" element={<SpringSecurityTests />} />
          <Route path="/Budget" element={<Budget />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </Router>
  );
}

export default App;