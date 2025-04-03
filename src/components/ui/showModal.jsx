"use client"; // This makes it a Client Component

import { useActionState, useState } from "react";
import { PlusCircle, X } from "lucide-react";
import { addNewTask } from "../../../action/add-task";
import { Button } from "./button";

export const AddTaskButton = (workspaceId) => {
  console.log("workspace id", workspaceId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700"
      >
        <PlusCircle size={20} className="mr-2" /> New Task
      </button>

      {isModalOpen && (
        <ShowModal
          workspaceId={workspaceId}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

const ShowModal = ({ workspaceId, onClose }) => {
  const [state, addTaskAction, isPending] = useActionState(
    addNewTask.bind(null, workspaceId),
    null
  );
  console.log("state:", state);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20">
      <div
        className="bg-white rounded-lg p-6 w-[500px] relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-6">
          Goal Breakdown &gt; Career & Education
        </h2>

        <form action={addTaskAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Insert your goal title"
              className={`w-full p-2 border rounded-md ${
                state?.title ? "border-red-500" : ""
              }`}
            />
            {state?.title && (
              <p className="text-red-500 text-xs mt-1">{state?.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tag
            </label>
            <select
              name="tag"
              className={`w-full p-2 border rounded-md ${
                state?.tag ? "border-red-500" : ""
              }`}
            >
              <option value="">Choose a tag</option>
              <option value="DESIGN">DESIGN</option>
              <option value="DATABASE">DATABASE</option>
            </select>
            {state?.tag && (
              <p className="text-red-500 text-xs mt-1">{state?.tag}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due
            </label>
            <input
              type="date"
              name="dueDate"
              className={`w-full p-2 border rounded-md ${
                state?.due ? "border-red-500" : ""
              }`}
            />
          </div>
          {state?.due && (
            <p className="text-red-500 text-xs mt-1">{state?.due}</p>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Insert your notes here"
              className={`w-full p-2 border rounded-md h-24 ${
                state?.description ? "border-red-500" : ""
              }`}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ShowModal;
