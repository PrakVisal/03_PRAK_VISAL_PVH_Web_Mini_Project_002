import CardComponent from "@/components/card";
import Logo from "@/components/logo";
import { PlusCircle, MoreVertical, LogOut, Bell, Star } from "lucide-react";
import ShowModal, { AddTaskButton } from "@/components/ui/showModal";
import MySideBar from "@/components/ui/sideBar";
import {
  getAllWorkplacesService,
  getWorkspaceById,
} from "../../../../service/workplaces-service";

export default async function Dashboard({ params }) {
  const tasks = [
    {
      title: "Slack Integration",
      category: "Development",
      status: "Not Started",
      date: "Tomorrow",
      color: "red",
    },
    {
      title: "Mini Project 001",
      category: "UX / UI Design",
      status: "Not Started",
      date: "Mar 03, 2025",
      color: "red",
    },
    {
      title: "ReactJS Homework 003",
      category: "Web Homework",
      status: "In Progress",
      date: "Mar 24, 2025",
      color: "blue",
    },
    {
      title: "Data Fetching",
      category: "Web Homework",
      status: "Finished",
      date: "Mar 23, 2025",
      color: "green",
    },
  ];

  const todoID = (await params).todoId;
  if (!todoID) {
    return (
      <div className="flex items-center justify-center font-black text-6xl">
        Welcome to back Boss
      </div>
    );
  }
  const getNameWorkspace = await getWorkspaceById(todoID);
  console.log("idTask:", getNameWorkspace);

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center">
          <h2 className="text-xl font-semibold ">
            {getNameWorkspace?.workspaceName}
          </h2>
          <div className="flex items-center space-x-4">
            <Bell size={20} />
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src="https://imgs.search.brave.com/12tMVrX4Tjpc3LbsCBym5w-m6nMaMstNriQywoXRHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzIxLzEyLzY0/LzM2MF9GXzExMjEx/MjY0MjFfNHRDblkw/clhVNE94NDRWa3pR/V2RIM3hEM2RJanpM/anguanBn"
                alt="User"
              />
              <span className="ml-2 text-gray-800">Monster</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Task Categories */}

          {["Not Started", "In Progress", "Finished"].map((status, index) => (
            <div key={index}>
              <h3
                className={`text-lg font-semibold border-b pb-2 ${
                  status === "Not Started"
                    ? "text-red-500"
                    : status === "In Progress"
                    ? "text-blue-500"
                    : "text-green-500"
                }`}
              >
                {status}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div>
            <CardComponent propsId={todoID} status={"NOT_STARTED"} />
          </div>
          <div>
            <CardComponent propsId={todoID} status={"IN_PROGRESS"} />
          </div>
          <div>
            <CardComponent propsId={todoID} status={"FINISHED"} />
          </div>
        </div>

        {/* Add Task Button */}
        <AddTaskButton workspaceId={todoID} />
      </main>
    </>
  );
}
