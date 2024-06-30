"use client";
import React, { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
        <aside
          className={`fixed inset-0 z-30 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto lg:w-64  p-4 border-1 border-white` }
        >
          <div className="text-lg font-bold mb-4">Techsolace</div>
          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Dashboard
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Overview
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-gray-700"
                >
                  Overview
                </a>
              </li>
            </ul>
          </nav>
        </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <main className="flex-1 p-6 ">
        <div className="bg-gray-800 p-4 rounded">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isSidebarOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <div className="text-3xl mb-4">Techsolace</div>
            <div className="text-4xl font-bold">Techsolace</div>
            <div className="text-xl mb-4">Techsolace</div>

            <div className="bg-gray-700 p-4 rounded mb-4">
              <div className="text-lg">Techsolace</div>
              <div className="text-2xl font-bold text-green-400">
                Techsolace
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded">
              <div className="flex justify-between">
                <div className="text-lg">Techsolace</div>
                <div className="text-lg">Techsolace</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
