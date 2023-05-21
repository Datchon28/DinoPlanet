import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Funlearning from "./pages/Funlearning/Funlearning";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/funlearning" element={<Funlearning />} />
            <Route exact path="/funlearning" element={<Funlearning />} />
            {/* <Route exact path="/about-us" element={<Page404 />} /> */}
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
