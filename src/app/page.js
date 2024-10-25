import React from "react";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar/>
   <Dashboard/>
    </React.Fragment>
  );
}
