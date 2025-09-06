import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white px-6">
      <h1 className="text-[120px] font-extrabold text-gray-900 leading-none">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-3 text-gray-500 max-w-lg text-center leading-relaxed">
        The page you’re looking for doesn’t exist or has been moved.
        Please check the URL or return to the homepage.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-xl shadow hover:bg-blue-700 transition-all"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
      <p className="mt-10 text-sm text-gray-400">
        © 2021 Vyapaarmart. All Rights Reserved.
      </p>
    </div>
  );
};

export default [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
