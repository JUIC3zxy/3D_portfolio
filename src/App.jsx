import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Feedbacks,
  Contact,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-[#FFC436]">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
          <About></About>
          <Experience />
          <Contact></Contact>
          <Feedbacks></Feedbacks>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
