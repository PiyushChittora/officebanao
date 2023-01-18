import React from "react";
import "./Sidebar.css";

import cross from "../../Assets/cross.svg";

export default function Sidebar(props) {
  return (
    <>
      <form
        className={`sidebarcontainer ${props.issidebaropen ? "" : "notactive"}`}
      >
        <div className="sidebar">
          <div className="sidenav">
            <div className="sidenavheader bold">Workorder</div>
            <img
              src={cross}
              alt=""
              className="closebtn"
              onClick={() => {
                props.setissidebaropen(false);
              }}
            />
          </div>

          <div className="clientname content">
            <div className="heading">Client</div>
            <select name="client" placeholder="Client name" required>
              <option value="" disabled selected hidden>
                Client name
              </option>
              <option value="A" className="name">
                A
              </option>
              <option value="B" className="name">
                B
              </option>
              <option value="C" className="name">
                C
              </option>
            </select>
          </div>

          <div className="dateOfCommencement content">
            <div className="heading">Date of Commencement</div>
            <input
              type="text"
              name="dateOfCommencement"
              className="dateinput"
              placeholder="dd/mm/yyyy"
              required
            />
          </div>

          <div className="dateOfCompletion content">
            <div className="heading">Date of Completion</div>
            <input
              type="text"
              name="dateOfCompletion"
              className="dateinput"
              placeholder="dd/mm/yyyy"
              required
            />
          </div>

          <div className="RFQcode content">
            <div className="heading">RFQ Code</div>
            <input
              type="text"
              name="RFQcode"
              className="codeinput"
              placeholder="RFQ Code"
              required
            />
          </div>
        </div>

        <input type="submit" value="Done" className="donebtn" />
      </form>
    </>
  );
}
