import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const onChangeData = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };
  const onSubmitData = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:8000/auth/login",
      LoginData,
      config
    );
    console.log(res);
  };
  return (
    <div class="flex items-center justify-center">
      <div class="w-full max-w-md">
        <form
          onSubmit={(e) => onSubmitData(e)}
          class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Carpool Login
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-normal mb-2"
              for="username">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              class="block text-gray-700 text-sm font-normal mb-2"
              for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              name="password"
              required
              value={LoginData.password}
              onChange={(e) => onChangeData(e)}
            />
          </div>
          <button
            class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
