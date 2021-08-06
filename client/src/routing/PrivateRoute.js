import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../app/shared/Spinner";

const PrivateRoute = ({
  component: Component,
  auth: { loading, isAuthenticated },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authState,
});
export default connect(mapStateToProps)(PrivateRoute);
