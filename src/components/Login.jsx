import { useLazyQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { LOGIN } from "../graphql/Queries";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInValid, setisInValid] = useState("");
  const [login, { data, error }] = useLazyQuery(LOGIN, {
    variables: { email, password },
  });
  if (data) {
    console.log(data);
    if (!data.login.length) return setisInValid(true);
  }
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await login().then(function (response) {
          console.log(response);
          var data = response.data.login;
          if (!data.length) {
            setisInValid("Invalid Credetials!!");
          } else {
            console.log("redirecting...");
            navigate("/home");
          }
        });
      }}
    >
      <div class="root">
        <div class=".parente">
          <div class="background: blue">
            <img
              class="mx-auto w-48"
              src="/src/assets/logo-hbo-max.jpg"
              alt="logo"
            ></img>
          </div>
          <h5 class="text-xl font-semibold mt-5 mb-12 pb-1 text-white">
            Sign In
          </h5>

          <div ClassName="mb-6 mt-5">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
              id="email"
              ClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                          mt-5"
              placeholder="Email"
              required
            />
          </div>
          <div ClassName="mb-6 mt-10">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              ClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required
            />
          </div>
          <div ClassName="flex items-start mb-6">
            <div ClassName="flex items-center h-5"></div>
          </div>
          <div>
            <button
              class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-purple-300 to-blue-200"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Log in
            </button>
          </div>
        </div>
        <div class="text-white px-4 py-6 md:p-12 md:mx-6">
          <h4 class="text-xl font-semibold mb-6">
            We are more than just a company
          </h4>
          <p class="text-sm">
            Say hello to HBO Max, the streaming platform that bundles all of HBO
            together with even more of your favorite movies and TV series, plus
            new Max Originals.
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
