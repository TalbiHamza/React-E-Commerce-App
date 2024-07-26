import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";

const App = () => {
  return (
    <div className=" min-h-screen grid grid-rows-[80px_auto] font-montserrat bg-[#f6f8fa]">
      <Navbar></Navbar>
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
