import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Pluto from "./Pluto/Pluto";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pluto" element={<Pluto />} />
        </Routes>
      </Router>
  );
}

export default App;