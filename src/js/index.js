// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom/client";

// // include your styles into the webpack bundle
// import "../styles/index.css";

// //import your own components
// import Home from "./component/home.jsx";

// //render your react application
// ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/index.css";
import HomePage from "./component/homepage";
import Work from "./component/work";
import MyNavbar from "./component/navbar";

const App = () => (
  <Router>
    <MyNavbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Work />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);


