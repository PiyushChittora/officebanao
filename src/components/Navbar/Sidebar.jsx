import { React, useState } from "react";

import "./Sidebar.css";

import cross from "../../Assets/cross.svg";

export default function Sidebar(props) {
  const submissionHandler = (e) => {
    e.preventDefault();
    var data = {
      name: e.target[0].value,
      DateOfCommencement: e.target[1].value,
      DateOfCompletion: e.target[2].value,
      RFQCode: e.target[3].value,
    };
    console.log(data);
  };

  const [errorMessageDateOfCommencement, setErrorMessageDateOfCommencement] = useState("");
  const [errorMessageDateOfCompletion, setErrorMessageDateOfCompletion] = useState("");

  const isDate = (inputText) => {
    var dateformat =/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (inputText.value.match(dateformat)) {

      var opera1 = inputText.value.split("/");
      var lopera1 = opera1.length;
      var pdate;
      if (lopera1 > 1) {
        pdate = inputText.value.split("/");
      }
      var dd = parseInt(pdate[0]);
      var mm = parseInt(pdate[1]);
      var yy = parseInt(pdate[2]);

      var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (mm == 1 || mm > 2) {
        if (dd > ListofDays[mm - 1]) {
          return false;
        }
        else{
          return true;
        }
      }
      if (mm == 2) {
        var lyear = false;
        if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
          lyear = true;
        }
        if (lyear == false && dd >= 29) {
          return false;
        }
        else if (lyear == true && dd > 29) {
          return false;
        }
        else{
          return true;
        }
      }
    }
    return false;
  };
  const validateDate = (value) => {
    console.log(value);
    if (isDate(value)) {
      if(value.name==="dateOfCommencement"){
        setErrorMessageDateOfCommencement("");
      }
      else{
        setErrorMessageDateOfCompletion("");
      }
    } else {
      if(value.name==="dateOfCommencement"){
        setErrorMessageDateOfCommencement("Enter Valid Date!");
      }
      else{
        setErrorMessageDateOfCompletion("Enter Valid Date!");
      }
    }
  };

  return (
    <>
      <form
        className={`sidebarcontainer ${props.issidebaropen ? "" : "notactive"}`}
        onSubmit={submissionHandler}
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
              onChange={(e) => validateDate(e.target)}
            />
            <div className="errormessage">{errorMessageDateOfCommencement}</div>
          </div>

          <div className="dateOfCompletion content">
            <div className="heading">Date of Completion</div>
            <input
              type="text"
              name="dateOfCompletion"
              className="dateinput"
              placeholder="dd/mm/yyyy"
              required
              onChange={(e) => validateDate(e.target)}
            />
            <div className="errormessage">{errorMessageDateOfCompletion}</div>
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

        <input type="submit" value="Done" className="donebtn btn" />
      </form>
    </>
  );
}
