import React from "react";
import Logo from "../logo";
import { LogOut, MoreVertical, PlusCircle, Star } from "lucide-react";
import { getAllWorkplacesService } from "../../../service/workplaces-service";
import { randomInt } from "crypto";
import Link from "next/link";
import { Button } from "./button";
import { CreateWorkspace } from "./createWorkspace";

export default async function MySideBar() {
  const workspaces = await getAllWorkplacesService();
  const colorDot = {
    0: "orange",
    1: "red",
    2: "blue",
    3: "green",
    4: "purple",
    5: "yellow",
    6: "gray",
    7: "amber",
    8: "cyan",
    9: "emerald",
  };
  console.log("Mydata:", workspaces);
  console.log("random:", Math.random() * 10);

  return (
    <>
      <aside className="w-64 bg-[#F8F9FB] p-6 min-h-screen ">
        {/* Logo */}
        <Logo />

        {/* Workspace Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-400 font-medium">Workspace</h2>
          <CreateWorkspace />
        </div>
        <div className="mb-8">
          <ul className="space-y-3">
            {workspaces?.map((workspace) => (
              <Link
                key={workspace.workspaceId}
                href={`/todo/${workspace.workspaceId}`}
              >
                <li className="flex items-center justify-between p-2 hover:bg-white rounded cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full bg-${
                        colorDot[Math.round(randomInt(9))]
                      }-500`}
                    ></div>
                    <span className="text-gray-700">
                      {workspace.workspaceName || "Untitled Workspace"}
                    </span>
                  </div>
                  <MoreVertical
                    size={16}
                    className="text-gray-400 opacity-0 group-hover:opacity-100"
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Favorite Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-400 font-medium">Favorite</h2>
            <button className="text-gray-400">
              <Star size={20} />
            </button>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between p-2 hover:bg-white rounded cursor-pointer group">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-gray-700">HRD Design</span>
              </div>
              <MoreVertical
                size={16}
                className="text-gray-400 opacity-0 group-hover:opacity-100"
              />
            </li>
            <li className="flex items-center justify-between p-2 hover:bg-white rounded cursor-pointer group">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-700">Website Design</span>
              </div>
              <MoreVertical
                size={16}
                className="text-gray-400 opacity-0 group-hover:opacity-100"
              />
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="mt-auto">
          <Button className="flex items-center text-gray-400 hover:text-gray-600 gap-2">
            <LogOut size={20} />
            <span>Logout</span>
          </Button>
        </div>
      </aside>
    </>
  );
}
