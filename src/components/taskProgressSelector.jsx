"use client"; // Mark this as a Client Component

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateProgress } from "../../service/task-service";
import { useState } from "react";

export default function TaskProgressSelector({ currentStatus }) {
  const [status, setStatus] = useState(currentStatus);

  const handleChange = async (newStatus) => {
    setStatus(newStatus); // Optimistic UI update
    const data = await updateProgress(newStatus); // Update status on the server
    console.log("UPdated:", data);
  };

  return (
    <Select onValueChange={handleChange} value={status}>
      <SelectTrigger
        className={`w-36 truncate ${
          status === "NOT_STARTED"
            ? "text-red-500 border-red-500"
            : status === "IN_PROGRESS"
            ? "text-blue-500 border-blue-500"
            : "text-green-500 border-green-500"
        }`}
      >
        <SelectValue placeholder={status} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="NOT_STARTED">Not Started</SelectItem>
        <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
        <SelectItem value="FINISHED">Finished</SelectItem>
      </SelectContent>
    </Select>
  );
}
