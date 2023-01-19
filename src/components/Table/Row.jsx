import React from "react";
import "./Row.css";

import plus from "../../Assets/arrows/plus.svg";
import minus from "../../Assets/arrows/minus.svg";
import uparrow from "../../Assets/arrows/uparrow.svg";
import downarrow from "../../Assets/arrows/downarrow.svg";

export default function Row(props) {
  return (
    <div className={`rowcontent`}>
      <div className="checkandname">
        <input type="checkbox" className="checkbox" name={props.type} />
        <div
          className={`${
            props.type === "civil" || "header" ? "bold" : ""
          } packages`}
        >
          {props.name}
        </div>
      </div>
      <div className={`rate ${props.type === "header" ? "bold" : ""}`}>
        {props.rate}
      </div>
      <div className={`total ${props.type === "header" ? "bold" : ""}`}>
        {props.type === "header" ? "" : <>₹ </>}
        {props.total}
      </div>
      {props.type === "civil" ? (
        <button className="expander" onClick={props?.Packageexpansionhandler}>
          <img src={props?.ispackageopen ? minus : plus} />
        </button>
      ) : props.type === "activity" ? (
        <button className="expander" onClick={props?.activityexpansionhandler}>
          <img src={props?.isactivityopen ? uparrow : downarrow} />
        </button>
      ) : (
        <div className="expander"></div>
      )}
    </div>
  );
}
