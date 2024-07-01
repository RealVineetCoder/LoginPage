"use client";
import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiFileHistoryLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#0C0B10]">
      <div className="h-full ">
        <aside
          className={`fixed inset-y-0 z-30 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-[#0C0B10] transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto lg:w-64 p-4`}
        >
          <div className="text-lg font-bold mb-4 text-[#7D7D81]">
            Techsolace
          </div>
          <nav>
            <ul>
              <li className="mb-2">
                <Link href="#" className="block py-4 pl-5 rounded text-[#7D7D81] hover:text-[#486BE3]">
                  <div className="flex items-center gap-3 text-lg">
                    <FiHome />
                    <p>Home</p>
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="block py-4 pl-5 rounded text-[#7D7D81] hover:text-[#486BE3]">
                  <div className="flex items-center gap-3 text-lg">
                    <MdOutlineAnalytics />
                    <p>Analytics</p>
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="block py-4 pl-5 rounded text-[#7D7D81] hover:text-[#486BE3]">
                  <div className="flex items-center gap-3 text-lg">
                    <RiTeamLine />
                    <p>Teams</p>
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="block py-4 pl-5 rounded text-[#7D7D81] hover:text-[#486BE3]">
                  <div className="flex items-center gap-3 text-lg">
                    <RiContactsBook3Line />
                    <p>Contacts</p>
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <div className="group">
                  <Link href="#" className="block py-4 pl-5 rounded text-[#7D7D81] hover:text-[#486BE3]">
                    <div className="flex items-center gap-3 text-lg">
                      <MdOutlineWorkOutline />
                      <p>Projects</p>
                      <IoIosArrowDown className="ml-auto" />
                    </div>
                  </Link>
                  <ul className="pl-10 hidden group-hover:block">
                    <li className="mb-2">
                      <Link href="#" className="block py-2 text-neutral-400 hover:text-[#486BE3]">
                        Create Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 text-neutral-400 hover:text-[#486BE3]">
                        Visit Project
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-2">
                <Link href="#" className="block py-4 pl-5 rounded text-[#7D7D81] hover:text-[#486BE3]">
                  <div className="flex items-center gap-3 text-lg">
                    <RiFileHistoryLine />
                    <p>Testimonials</p>
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <div className="group">
                  <Link href="#" className="block py-4 pl-5 rounded text-[#7D7D81] hover:text-[#486BE3]">
                    <div className="flex items-center gap-3 text-lg">
                      <MdOutlineWorkOutline />
                      <p>Blogs</p>
                      <IoIosArrowDown className="ml-auto" />
                    </div>
                  </Link>
                  <ul className="pl-10 hidden group-hover:block">
                    <li className="mb-2">
                      <Link href="#" className="block py-2 text-neutral-400 hover:text-[#486BE3]">
                        Create Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block py-2 text-neutral-400 hover:text-[#486BE3]">
                        Visit Blog
                      </Link>
                    </li>
                  </ul>
                </div>
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
      </div>
      <div className="flex-1 h-full bg-[#1F1E25] rounded-2xl border-8 border-[#0C0B10] text-white">
        <div className="flex justify-between items-center p-5">
          <h1>Main Content</h1>
          <button
            className="text-2xl hover:text-[#486BE3] lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <CiMenuFries />
          </button>
        </div>
        <div className="p-5">{/* Main content goes here */}</div>
      </div>
    </div>
  );
}
