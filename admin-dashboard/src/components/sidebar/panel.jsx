import React from "react";

import { NavLink } from "react-router-dom";
import SidePanel from "./side";
import "./panel.css";

const Panel = () => {
  return (
    <div className="panel-main">
      {SidePanel.map((data) => {
        return (
          <div className="panel-h1">
            <h2>{data.name}</h2>
            {Object.entries(data.pages).map((pageKeys) => {
              let dataPages = pageKeys[1].status;
              let allRoutes=pageKeys[1].route
              let allIcons=pageKeys[1].icon
              console.log(allIcons);
              return dataPages === 1 ? (
                <NavLink
                  to={allRoutes}
                  activeClassName="active"
                  className="panel-link"
                >
                  <div className="panel-h2">{allIcons}&nbsp;   <>{pageKeys[0]}</> </div>
                </NavLink>
              ) : (
                <></>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Panel;
