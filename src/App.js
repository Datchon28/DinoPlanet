import { BrowserRouter, Routes, Route } from "react-router-dom";
import React ,{ Suspense, lazy } from "react";

import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout";
import { Loading } from "./Components/Loading/Loading";
import Faqs from "./pages/Faqs/Faqs";
import Contact from "./pages/Contact/Contact";
import Subjects from "./pages/Funlearning/Subjects/Subjects";
const Home = React.lazy(() => import('./pages/Home/Home'));
const Funlearning = React.lazy(() => import('./pages/Funlearning/Funlearning'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultLayout>
          <Suspense fallback={<Loading loadPage={true} />} >
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/funlearning" element={<Funlearning />} />
              <Route exact path="/faqs" element={<Faqs />} />
              <Route exact path="/contact-us" element={<Contact />} />
            </Routes>
          </Suspense>
        </DefaultLayout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
