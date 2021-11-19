import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATIONS } from "./Api/login";
import { useFormik } from "formik";
import * as yup from "yup";
import Cookies from "js-cookie";

const validationSchema = yup.object().shape({
  email: yup.string().required("Required").email("Invalid email"),
  password: yup.string().required("Required"),
});

const Login = () => {
  const [login] = useState({
    email: "",
    password: "",
  });

  const [mutation] = useMutation(LOGIN_MUTATIONS);

  const handleRequest = async (values) => {
    const { email, password } = values;

    try {
      const signIn = await mutation({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
      Cookies.set("token", signIn.data.login.token);
    } catch (error) {
      console.log(error);
    }
  };

  const userlogin = useFormik({
    initialValues: login,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleRequest(values);
    },
  });

  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-24 w-auto"
            src="./assets/logo.png"
            alt="images"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your Nolep
          </h2>
        </div>
        <form
          class="mt-8 space-y-6"
          method="POST"
          onSubmit={userlogin.handleSubmit}
        >
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={userlogin.values.email}
                onChange={userlogin.handleChange}
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={userlogin.values.password}
                onChange={userlogin.handleChange}
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
