import React, { Fragment } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import DriverRoute from "../../routing/DriverRoute";
import Demands from "./Demands";
import Journeys from "./Journeys";
const Dashboard = () => {
  return (
    <Fragment>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-5/6">
          <Topbar />
          <Switch>
            <div
              style={{ height: "calc(100vh - 90px)" }}
              className="bg-secondary-tint p-6">
              <Route exact path="/dashboard" component={Home} />
              <Route exact path="/dashboard/demands" component={Demands} />
              <DriverRoute
                exact
                path="/dashboard/journeys"
                component={Journeys}
              />
            </div>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
