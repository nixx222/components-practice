import { Routes, Route, Link } from 'react-router-dom'; // Import Routes, Route, and Link
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
      {/* Navigation links */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link to the Home page */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Link to the About page */}
          </li>
        </ul>
      </nav>

      {/* Define routes for Home and About pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the Home page */}
        <Route path="/about" element={<About />} /> {/* Route for the About page */}
      </Routes>
    </div>
  );
}

export default App;
