import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate=useNavigate()

    const handleSubmit=()=>{
       
        navigate('/')

    }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen flex flex-col align-middle justify-center items-center">

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center px-6 max-w-5xl mx-auto bg-white h-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Welcome Back
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Enter your credentials to access your business dashboard.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">
                mail
              </span>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-4 bg-input-light dark:bg-input-dark border-2 border-transparent focus:border-primary focus:ring-0 rounded-xl placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">
                lock
              </span>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-4 bg-input-light dark:bg-input-dark border-2 border-transparent focus:border-primary focus:ring-0 rounded-xl placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-sm text-primary font-bold hover:underline"
          >
            Forgot password?
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6"></footer>
    </div>
  );
};

export default LoginPage;
