import React from "react";
import "./App.css";
import {
  Home,
  Astrologer,
  Footer,
  Review,
  Solution,
  Testimonial,

} from "./components/data";

const App = () => {
  return (
    <>
      <Home />
      <Testimonial />
      <Astrologer />
      <Solution />
      <Review />
      <Footer />
    </>
  );
};

export default App;
