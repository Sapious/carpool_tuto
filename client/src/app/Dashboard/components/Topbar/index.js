import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { logout } from "../../../../actions/auth.actions";
import PropTypes from "prop-types";
import { useClickAway } from "react-use";

const Topbar = ({ logout }) => {
  const [isDropOpen, setisDropOpen] = useState(false);
  const dropRef = useRef(null);
  useClickAway(dropRef, (e) => {
    if (!e.path.find((el) => el.id === "drop-btn-toggle")) setisDropOpen(false);
  });
  return (
    <div className="p-6 flex justify-between gap-4 items-center">
      <div className="text-dark text-xl font-bold">Home</div>
      <div
        id="drop-btn-toggle"
        onClick={(e) => setisDropOpen(!isDropOpen)}
        className=" relative flex items-center justify-between gap-2 rounded border border-secondary-shade shadow-sm py-2 px-3">
        <div className="rounded-full w-6 h-6 bg-primary-tint flex justify-center items-center text-sm font-semibold text-secondary-tint">
          RB
        </div>
        <div className="text-dark">raed bahri</div>
        <i className="fas fa-chevron-down text-dark"></i>
      </div>
      {isDropOpen && (
        <div
          ref={dropRef}
          style={{ width: "151.92px", top: "4.2rem" }}
          className="absolute bg-red-500 shadow-md z-20 right-6  rounded-sm">
          <div className="p-2 bg-secondary-tint hover:bg-secondary text-dark cursor-pointer font-medium">
            Settings
          </div>
          <div
            onClick={(e) => logout()}
            className="p-2 bg-secondary-tint hover:bg-secondary text-dark cursor-pointer font-medium">
            Logout
          </div>
        </div>
      )}
    </div>
  );
};
Topbar.propTypes = {
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
