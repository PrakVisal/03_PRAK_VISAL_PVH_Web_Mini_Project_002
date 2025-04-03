import CardComponent from "@/components/card";
import Logo from "@/components/logo";
import { PlusCircle, MoreVertical, LogOut, Bell } from "lucide-react";
import { getAllWorkplacesService } from "../../../service/workplaces-service";
import ShowModal, { AddTaskButton } from "@/components/ui/showModal";
import { TaskService } from "../../../service/task-service";

export default async function Dashboard() {
  const getAllWorkplaces = await getAllWorkplacesService();
  const initialTasks = await TaskService();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F8F9FB] p-6 min-h-screen">
        {/* ... rest of sidebar code ... */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">HRD Design</h2>
          <div className="flex items-center space-x-4">
            <Bell size={20} />
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full"
                src="https://via.placeholder.com/40"
                alt="User"
              />
              <span className="ml-2 text-gray-800">Monster</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Task Categories */}
          <CardComponent initialTasks={initialTasks} status="NOT_STARTED" />
          <CardComponent initialTasks={initialTasks} status="IN_PROGRESS" />
          <CardComponent initialTasks={initialTasks} status="FINISHED" />
        </div>

        {/* Add Task Button */}
        <AddTaskButton />
      </main>
    </div>
  );
}
