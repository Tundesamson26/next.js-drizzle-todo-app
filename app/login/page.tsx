"use client";
import Link from "next/link";
import { emailLogin } from "./actions";

const Login = () => {
  return (
    <div className="container mx-auto pt-20">
      <form className="space-y-4 w-4/12 mx-auto">
        <h1 className="text-center text-3xl font-semibold">Login</h1>
        <div className=" pb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@email.com"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="pb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          formAction={emailLogin}
          className="w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>

        <div className="text-center">
          Don&apos;t have an account?{""}{" "}
          <Link href="/signup" className="text-blue-500 underline">
            Sign up
          </Link>{" "}
        </div>
      </form>
    </div>
  );
};

export default Login;
