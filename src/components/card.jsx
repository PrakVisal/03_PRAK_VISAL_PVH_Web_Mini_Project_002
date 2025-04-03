// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React from "react";
import { TaskService, updateProgress } from "../../service/task-service";
import TaskProgressSelector from "./taskProgressSelector";

export default async function CardComponent({ propsId, status }) {
  const getAllTasks = await TaskService(propsId);
  const filteredTasks = getAllTasks.filter((task) => task.status === status);
  const handleChange = async (value) => {
    await updateProgress(value); // Fetch new data when the user selects an option
  };

  // const formattedDate = new Date(task.endDate).toLocaleDateString("en-US", {
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // });
  return (
    <>
      {filteredTasks.map((task) => (
        <div
          className="border border-gray-300 rounded-xl mt-8"
          key={task.taskId}
        >
          <div className="p-5">
            <div className="flex justify-between line-clamp-1">
              <h2 className="text-xl font-bold capitalize">{task.taskTitle}</h2>
              <Ellipsis />
            </div>

            {/* task detials */}
            <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
              {task.taskDetails}
            </p>

            <div className="flex justify-between items-center mt-4">
              {/* tag */}
              <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                {task.tag}
              </p>

              {/* status */}
              <div
                className={`rounded-full w-8 h-8 ${
                  status === "NOT_STARTED"
                    ? "bg-red-500 "
                    : status === "IN_PROGRESS"
                    ? "bg-blue-500 "
                    : "bg-green-500 "
                }`}
              ></div>
            </div>
          </div>

          {/* progress */}
          <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
            <TaskProgressSelector currentStatus={task.status} />
            {/* <Select onValueChange={(value) => handleChange(value)}>
              <SelectTrigger
                className={`w-36 truncate ${
                  status === "NOT_STARTED"
                    ? "text-red-500 border-red-500"
                    : status === "IN_PROGRESS"
                    ? "text-blue-500 border-blue-500"
                    : "text-green-500 border-green-500"
                }`}
              >
                <SelectValue placeholder={task.status} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NOT_STARTED">Not Started</SelectItem>
                <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                <SelectItem value="FINISHED">Finished</SelectItem>
              </SelectContent>
            </Select> */}

            {/* date */}
            <p className="flex gap-3 text-light-steel-blue">
              <Clock size={22} />{" "}
              {new Date(task.endDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
