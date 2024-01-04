import React from "react";
import PersonalDetailsCard from "./PersonalDetailsCard";
import "./Style/sidebar.css";
function Sidebar() {
  const sidebarDataArray=[
    {
      "logo":"",
      "para":"21 Years Old"
    },
    {
      "logo":"",
      "para":"Berlin, German"
    },
    {
      "logo":"",
      "para":"INTJ-T"
    }
  ]
  return (
    <>
      <aside className="sidebar">
        <div className="image-container">
          <img
            src="https://oktayshakirov.com/assets/images/avatar.jpg"
            alt=""
          />
        </div>
        <div className="title-container">
          <p>Aadarsh Raj</p>
          <div className="hello-world-btn">Hello, World!</div>
        </div>
        <hr />
        <div className="details-container">
          <PersonalDetailsCard />
          <PersonalDetailsCard />
          <PersonalDetailsCard />
        </div>
        <div className="social-media-container"></div>
      </aside>
    </>
  );
}

export default Sidebar;
