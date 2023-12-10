"use client";
import Input from "@/components/Input";
import { apiUrl } from "@/lib/constant";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password1 !== formData.password2) {
      setError("Password does match!");
    } else {
      // Send registration data to the backend

      const response = await fetch(`${apiUrl}/api/auth/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, sign in the user
        await signIn("credentials", {
          username: formData.username,
          password: formData.password1,
          callbackUrl: "/",
        });
        router.push("/");
      } else {
        // Registration failed, handle errors
        setError("Something is going wrong!");
        console.error("Registration failed");
      }
    }
  };

  return (
    <form onSubmit={handleSignUp} className="space-y-4" method="POST">
      {/* Error */}
      {error && (
        <div className="text-lg font-semibold text-red-700">{error}</div>
      )}
      <Input
        type="text"
        id="username"
        label="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <Input
        type="email"
        id="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        type="password"
        id="password1"
        label="Password"
        value={formData.password1}
        onChange={handleChange}
        required
      />

      <Input
        type="password"
        id="password2"
        label="Confirm Password"
        value={formData.password2}
        onChange={handleChange}
        required
      />

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>

      <div className="text-sm flex justify-between">
        <span>Already have an account?</span>
        <Link
          href="/auth/sign-in"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Sign in instead!
        </Link>
      </div>
    </form>
  );
}
