import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../actions/auth.actions";
import { useHistory } from "react-router-dom";
const Register = ({ register, auth }) => {
  let history = useHistory();
  const [RegisterData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    zipCode: "",
    phoneNumber: "",
    identityNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChangeData = (e) => {
    setRegisterData({ ...RegisterData, [e.target.name]: e.target.value });
    console.log(RegisterData);
  };
  const onSubmitData = async (e) => {
    e.preventDefault();
    if (RegisterData.password === RegisterData.confirmPassword) {
      await register(RegisterData);
      history.push("/login");
    } else {
      console.log("password don't match ");
    }
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
          <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Carpool Login
          </div>
          <div className="flex justify-between items-center w-full gap-4">
            <div class="mb-4 w-1/2">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="firstName">
                First Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                onChange={(e) => onChangeData(e)}
                value={RegisterData.firstName}
              />
            </div>
            <div class="mb-4 w-1/2">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="lastName">
                Last Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                onChange={(e) => onChangeData(e)}
                value={RegisterData.lastName}
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full gap-4">
            <div class="mb-4 w-1/2">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="identityNumber">
                Identity Number
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="identityNumber"
                type="number"
                min={0}
                required
                placeholder="Identity Number"
                onChange={(e) => onChangeData(e)}
                value={RegisterData.identityNumber}
              />
            </div>
            <div class="mb-4 w-1/2">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="phoneNumber">
                Phone Number
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="phoneNumber"
                type="number"
                min={0}
                required
                placeholder="Phone Number"
                onChange={(e) => onChangeData(e)}
                value={RegisterData.phoneNumber}
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full gap-4">
            <div class="mb-4 w-1/3">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="city">
                City
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="city"
                type="text"
                required
                placeholder="City"
                onChange={(e) => onChangeData(e)}
                value={RegisterData.city}
              />
            </div>
            <div class="mb-4 w-1/3">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="street">
                Street
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="street"
                type="text"
                required
                placeholder="Street"
                onChange={(e) => onChangeData(e)}
                value={RegisterData.street}
              />
            </div>
            <div class="mb-4 w-1/3">
              <label
                class="block text-dark text-sm font-normal mb-2"
                for="zipCode">
                Zip Code
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
                name="zipCode"
                type="number"
                min={0}
                required
                placeholder="Zip Code"
                onChange={(e) => onChangeData(e)}
                value={RegisterData.zipCode}
              />
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-dark text-sm font-normal mb-2" for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              required
              placeholder="Email"
              onChange={(e) => onChangeData(e)}
              value={RegisterData.email}
            />
          </div>
          <div>
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
              onChange={(e) => onChangeData(e)}
              value={RegisterData.password}
            />
          </div>
          <div>
            <label
              class="block text-dark text-sm font-normal mb-2"
              for="confirmPassword">
              Confirm Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-dark mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              onChange={(e) => onChangeData(e)}
              value={RegisterData.confirmPassword}
            />
          </div>
          <button
            class="px-4 py-2 rounded text-secondary-tint inline-block shadow-lg bg-primary hover:bg-primary-shade focus:bg-primary-shade"
            type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authState,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
