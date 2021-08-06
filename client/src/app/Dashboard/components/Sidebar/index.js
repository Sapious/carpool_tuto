import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-1/6 bg-primary flex justify-start items-center flex-col p-6">
      <div className="text-secondary-tint text-3xl mb-32">Logo</div>
      <div className="flex flex-col items-between justify-start w-full gap-2">
        <NavLink
          activeClassName="bg-primary-shade"
          to="/dashboard"
          exact
          className="flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer">
          <i class="fas fa-home text-secondary-tint text-xl"></i>
          <div className="text-xl text-secondary-tint">Home</div>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-shade"
          exact
          to="/dashboard/demands"
          className="flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer">
          <i class="fas fa-home text-secondary-tint text-xl"></i>
          <div className="text-xl text-secondary-tint">Demands</div>
        </NavLink>
        <NavLink
          activeClassName="bg-primary-shade"
                  to="/dashboard/journeys"
                  exact
          className="flex items-center justify-start gap-2 py-3 px-6 rounded-full hover:bg-primary-shade w-full cursor-pointer">
          <i class="fas fa-home text-secondary-tint text-xl"></i>
          <div className="text-xl text-secondary-tint">Journeys</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
