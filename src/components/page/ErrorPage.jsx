import React from 'react'
import { FaHome } from "react-icons/fa";
import { NavLink, useRouteError } from 'react-router';

export default function ErrorPage() {
    const error = useRouteError();
  return (
     <div className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center">

        <h1 className="text-9xl font-bold text-primary">404</h1>

        <h2 className="text-4xl hero-font mt-4">
          Oops! Page Not Found
        </h2>

        <p className="mt-6 text-gray-500 max-w-xl mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {error && (
          <p className="mt-3 text-red-500">
            {error.statusText || error.message}
          </p>
        )}

        <NavLink to="/">
          <button className="btn btn-primary rounded-full mt-8">
            <FaHome />
            Back to Home
          </button>
        </NavLink>

      </div>
    </div>
  )
}
