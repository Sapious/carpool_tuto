import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../../actions/auth.actions";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
const Login = ({ login, auth }) => {
  let history = useHistory();
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const onChangeData = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };
  const onSubmitData = async (e) => {
    e.preventDefault();
    await login(LoginData);
  };
  if (auth.isAuthenticated) {
    history.push("/");
  }
  return (
    <div class="flex items-center justify-center">
      <div class="w-full max-w-md">
        <form
          onSubmit={(e) => onSubmitData(e)}
          class="bg-secondary-tint shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div class="text-dark text-2xl flex justify-center border-b-2 py-2 mb-4">
            Carpool Login
          </div>
          <div class="mb-4">
            <label
              class="block text-dark text-sm font-normal mb-2"
              for="username">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              required
              placeholder="Email"
              value={LoginData.email}
              onChange={(e) => onChangeData(e)}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-dark text-sm font-normal mb-2"
              for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
              required
              value={LoginData.password}
              onChange={(e) => onChangeData(e)}
            />
          </div>
          <button
            class="px-4 py-2 rounded text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.authState,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
