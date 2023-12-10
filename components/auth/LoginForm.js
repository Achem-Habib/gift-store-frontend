"use client";
import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    if (!result.error) {
      // Redirect or show a success message
      console.log("Login successful");
    } else {
      // Handle sign-in error
      console.error(result.error);
    }
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="space-y-4"
      action="#"
      method="POST"
    >
      <Input
        type="text"
        id="username"
        label="Username"
        autoComplete="username"
        value={credentials.username}
        onChange={handleChange}
        required
      />

      <Input
        type="password"
        id="password"
        label="Password"
        autoComplete="current-password"
        required
        value={credentials.password}
        onChange={handleChange}
      />

      <div className="text-sm">
        <Link
          href="#"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </Link>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>

      <div className="text-sm flex justify-between">
        <span>Don't have an account?</span>
        <Link
          href="/auth/sign-up"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Create one here!
        </Link>
      </div>
    </form>
  );
}
