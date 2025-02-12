import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="max-w-sm bg-white shadow-xl rounded-xl mx-auto p-5">
        <h2 className="text-center text-gray-700 font-bold">Login</h2>
        <form className="flex flex-col mx-auto gap-2">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="password"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/register"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
      <p className="text-center text-gray-500 text-xs mt-5">
        &copy;2025 Acme Corp. All rights reserved.
      </p>
    </>
  );
};

export default Login;
