import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import ExecutedShows from "./components/ExecutedShows";
import EventApproach from "./components/EventApproach";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
                   <EventApproach />
               <ExecutedShows />
              <Gallery />
              <Footer />
            </>
          }
        />
        <Route path="/overview" element={<Overview />} />
        <Route path="/cities" element={<ExecutedShows />} />
      </Routes>
    </Router>
  );
}

export default App;
