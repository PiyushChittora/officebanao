import { React, useState } from "react";

import Sidebar from "./Sidebar";

import "./Navbar.css";

import backarrow from "../../Assets/arrows/backarrow.svg";

export default function navbar() {
  const [issidebaropen, setissidebaropen] = useState(false);
  return (
    <>
      <div
        className={issidebaropen ? "darkBG" : ""}
        onClick={() => {
          setissidebaropen(false);
        }}
      />

      <div className="navbarcontainer">
        <nav className="navbar">
          <div className="topic">
            <img className="backbtn" src={backarrow} />
            <div className="topicname bold">Create Workorder</div>
          </div>
          <div
            className="savebtn"
            onClick={() => {
              setissidebaropen(true);
            }}
          >
            Save
          </div>
        </nav>

        <Sidebar
          issidebaropen={issidebaropen}
          setissidebaropen={setissidebaropen}
        />
      </div>
    </>
  );
}
