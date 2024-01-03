import React from "react";
import PersonalDetailsCard from "./PersonalDetailsCard";
import "./Style/sidebar.css";
function Sidebar() {
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
