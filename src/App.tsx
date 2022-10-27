import Main from "./Main";
import Footer from "./components/Footer";
import Home from "./Routes/Home";
import ForU from "./Routes/ForU";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/foru" element={<ForU />} />;
      </Routes>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
