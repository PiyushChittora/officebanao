import { React, useState } from "react";
import "./Table.css";

import plus from "../../Assets/arrows/plus.svg";
import minus from "../../Assets/arrows/minus.svg";
import uparrow from "../../Assets/arrows/uparrow.svg";
import downarrow from "../../Assets/arrows/downarrow.svg";

import data from "../../Data/Tabledata";

export default function Table() {
  return (
    <>
      <div className="table">
        <div className="header rowcontent">
          <div className="checkandname">
            <input
              type="checkbox"
              className="checkbox"
              name="allcheckbox"
            />
            <div className="packages bold">Packages</div>
          </div>
          <div className="rate bold">
            Rate <i>(in sqft)</i>
          </div>
          <div className="total bold">Total</div>
          <div className="expander"></div>
        </div>

        {data.map((obj, indx) => {
          const [ispackageopen, setispackageopen] = useState(false);
          const Packageexpansionhandler = () => {
            ispackageopen ? setispackageopen(false) : setispackageopen(true);
          };

          return (
            <div key={indx} className="row">
              <div className="civil">
                <div className="rowcontent">
                  <div className="checkandname">
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="packagecheckbox"
                    />
                    <div className="packages bold">{obj.Package}</div>
                  </div>
                  <div className="rate">{obj.Rate}</div>
                  <div className="total">₹ {obj.Total}</div>
                  <button
                    className="expander"
                    onClick={Packageexpansionhandler}
                  >
                    <img src={ispackageopen ? minus : plus} />
                  </button>
                </div>

                {obj.Activity.map((act, indx) => {
                  const [isactivityopen, setisactivityopen] = useState(false);
                  const activityexpansionhandler = () => {
                    isactivityopen
                      ? setisactivityopen(false)
                      : setisactivityopen(true);
                  };
                  return (
                    <div key={indx} className="row">
                      {ispackageopen === true && (
                        <div className="activity">
                          <div className="rowcontent">
                            <div className="checkandname">
                              <input
                                type="checkbox"
                                className="checkbox"
                                id="activitycheckbox"
                              />
                              <div className="packages">{act.Package}</div>
                            </div>
                            <div className="rate">{act.Rate}</div>
                            <div className="total">₹ {act.Total}</div>
                            <button
                              className="expander"
                              onClick={activityexpansionhandler}
                            >
                              <img src={isactivityopen ? uparrow : downarrow} />
                            </button>
                          </div>
                          {act.workitem.map((work, indx) => {
                            return (
                              <div className="row">
                                {isactivityopen === true && (
                                  <div key={indx} className="work">
                                    <div className="rowcontent">
                                      <div className="checkandname">
                                        <input
                                          type="checkbox"
                                          className="checkbox"
                                          id="workcheckbox"
                                        />
                                        <div className="packages">
                                          {work.Package}
                                        </div>
                                      </div>
                                      <div className="rate">{work.Rate}</div>
                                      <div className="total">
                                        ₹ {work.Total}
                                      </div>
                                      <div className="expander"></div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
