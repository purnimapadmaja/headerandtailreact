import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./FunctionalComponents/NavBarComponents/RoutingComponets/Home";
import Home from "./FunctionalComponents/ReactMiniProject/Home";
import About from "./FunctionalComponents/ReactMiniProject/About";
import HeaderAndTail from "./FunctionalComponents/ReactMiniProject/HeaderAndTail";
import PageNotFound from "./FunctionalComponents/ReactMiniProject/PageNotFound";
import TodoList from "./FunctionalComponents/NavBarComponents/RoutingComponets/TodoList";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/HeaderAndTail" element={<HeaderAndTail />} />
          <Route path="/Todolist" element={<TodoList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
