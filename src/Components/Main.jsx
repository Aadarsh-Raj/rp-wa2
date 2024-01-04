import React, { useState,useEffect,useRef } from "react";
import "./Style/main.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import About from "./About";
import Certificate from "./Certificate";
import Project from "./Project";
import More from "./More";
import Contact from "./Contact";

function Main() {
    let content = <About />;
  const [selectedLink, setSelectedLink] = useState(content);
  const contentSectionRef = useRef(null);

  const handleNavLinkClick = (link) => {
      switch (link) {
        case "about":
          content = <About />;
          break;
        case "certificate":
          content = <Certificate/>;
          break;
        case "project":
          content = <Project />;
          break;
        case "more":
          content = <More />;
          break;
        case "contact":
          content = <Contact />;
          break;
        default:
            content = <div>This is error</div>;
          break;
      }
    setSelectedLink(content);
  };


  
  return (
    <>
      <main className="main" >
        
        <Sidebar />
        <section></section>
        <section className="main-section" >
          <Header clickIt={(link)=>handleNavLinkClick(link)}  />
          <div className="content-section" >
          {selectedLink}
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
