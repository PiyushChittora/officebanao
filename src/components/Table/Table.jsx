import { React, useState } from "react";
import "./Table.css";

import plus from "../../Assets/arrows/plus.svg";
import minus from "../../Assets/arrows/minus.svg";
import uparrow from "../../Assets/arrows/uparrow.svg";
import downarrow from "../../Assets/arrows/downarrow.svg";

import data from "../../Data/Tabledata";
import Row from "./Row";

export default function Table() {
  return (
    <>
      <div className="table">
        <div className="header">
          <Row
            type="header"
            name="Package"
            rate={
              <>
                Rate <i>(in sqft)</i>
              </>
            }
            total="Total"
          />
        </div>

        {data.map((obj, indx) => {
          const [ispackageopen, setispackageopen] = useState(false);
          const Packageexpansionhandler = () => {
            ispackageopen ? setispackageopen(false) : setispackageopen(true);
          };

          return (
            <div key={indx} className="row">
              <div className="civil">
                <Row
                  type="civil"
                  name={obj.Package}
                  rate={obj.Rate}
                  total={obj.Total}
                  ispackageopen={ispackageopen}
                  Packageexpansionhandler={Packageexpansionhandler}
                />

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
                          <Row
                            type="activity"
                            name={act.Package}
                            rate={act.Rate}
                            total={act.Total}
                            isactivityopen={isactivityopen}
                            activityexpansionhandler={activityexpansionhandler}
                          />
                          {act.workitem.map((work, indx) => {
                            return (
                              <div className="row">
                                {isactivityopen === true && (
                                  <div key={indx} className="work">
                                    <Row
                                      type="work"
                                      name={work.Package}
                                      rate={work.Rate}
                                      total={work.Total}
                                    />
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
