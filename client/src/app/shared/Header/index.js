import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ auth }) => {
  return (
    <header>
      <nav className="flex justify-start items-center gap-8 py-12 px-8">
        <div className="text-2xl text-black font-bold">CarPool</div>
        <div className="flex justify-between items-center gap-4 ">
          <div className="capitalize">blog</div>
          <div className="capitalize">pricing</div>
          <div className="capitalize">FAQ</div>
          <div className="capitalize">How It Works</div>
        </div>
        {auth.isAuthenticated ? (
          <div className="ml-auto flex justify-between items-center gap-4">
            <Link
              to="/dashboard"
              className="bg-black text-white px-6 py-4 capitalize hover:bg-gray-900">
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="ml-auto flex justify-between items-center gap-4">
            <Link to="/login">Sign in</Link>
            <Link
              to="/register"
              className="bg-black text-white px-6 py-4 capitalize hover:bg-gray-900">
              Get started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
Header.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.authState,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
