import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { REGISTER_MUTATIONS } from "./Api/register";
import { useHistory } from "react-router";

const validation = yup.object().shape({
  firstName: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email"),
});

const Register = () => {
  const [register] = useState({
    firstName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "SELLER",
  });

  const history = useHistory();

  const [mutation] = useMutation(REGISTER_MUTATIONS);

  const handleRequest = async (values) => {
    const { firstName, email, password } = values;

    const role = register.role;

    try {
      const regis = await mutation({
        variables: {
          input: {
            firstName,
            email,
            password,
            phoneNumber: values.phoneNumber.toString(),
            role,
          },
        },
      });
      history.push("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: register,
    validationSchema: validation,
    onSubmit: (values) => {
      handleRequest(values);
    },
  });

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="./assets/logo.png"
            width="400"
            alt="images"
          />
          <h2 className="mt-4 text-center text-3xl font-extrabold text-blue-900 shadow-2xl">
            Halo Nolep
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 method"
          method="POST"
          onSubmit={formik.handleSubmit}
        >
          {/* <input type="hidden" name="remember" value="true" /> */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username">Username</label>
              <input
                id="username"
                name="firstName"
                type="text"
                // autoComplete="#"
                // required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                id="email"
                name="email"
                // type="email"
                autoComplete="email"
                // required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="#"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label for="phoneNumber">Number Phone</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="number"
                autoComplete="#"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Number Phone"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
