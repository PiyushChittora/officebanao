import React from "react";
import "./Overview.css";
export default function Overview() {
  return (
    <div className="tabcontainer">
      <button className="tab bold" id="overviewtab">Overview</button>
      <button className="tab bold" id="othertab" onClick={()=>{
        console.log("Hello world")
      }}>Other</button>
    </div>
  );
}
