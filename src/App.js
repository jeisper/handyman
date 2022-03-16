import "./App.css";
import { Flex } from "@chakra-ui/react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <Flex>
        <Routes>
          <Route path="/me" element={<Landing />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
