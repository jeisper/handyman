import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Customer from "./pages/customer";
import Review from "./pages/review";
import Profile from "./pages/profile";
import Form from "./pages/form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/form" element={<Form />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
