import Header from "./components/Header";
import Home from "./Routes/Home";
import ForU from "./Routes/ForU";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/foru" element={<ForU />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
