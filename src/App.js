import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Provider from "./pages/form";
import Customer from "./pages/customer";
import Review from "./pages/review";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/handyman" element={<Provider />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
