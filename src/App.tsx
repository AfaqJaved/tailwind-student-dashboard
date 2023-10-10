import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/Sidebar";

function App() {
  const [showSideBar , setShowSideBar] = React.useState(false);
  return (
    <div className="flex bg-white">
      <SideBar show={showSideBar} setShow={setShowSideBar}></SideBar>
      <div className="w-[20%] md:hidden h-screen scroll-smooth"><p></p></div>
      <div id="mainContent" className="w-[75%] md:ml-auto md:mr-auto">
        <div className=" mr-auto ml-auto">
          <Header setShowSideBar={setShowSideBar} show={showSideBar} ></Header>
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  );
}

export default App;
