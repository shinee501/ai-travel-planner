"use client";

import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration Successful!");
      console.log(res.data);
    } catch (error: any) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-4">Register</h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}