"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddSquare } from "iconsax-react";
import React, { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { WorkspaceAction } from "../../../action/workspace-action";

export function CreateWorkspace() {
  const [state, formAction, isPending] = useActionState(WorkspaceAction, null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      setIsOpen(false);
    }
  }, [state]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={() => setIsOpen(true)}>
        <AddSquare color="#808080" variant="outline" size={25} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-100">
        <DialogHeader>
          <DialogTitle>Create new Workspace</DialogTitle>
          {/* <DialogDescription>
            Can write detail work space name????
          </DialogDescription> */}
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4 ">
            {/* <Label htmlFor="name" className="text-right">
              workspace name
            </Label> */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                className="col-span-4"
                name="workspaceName"
                placeholder="Please type your workspace name"
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className={" text-blue-500 border-2 border-blue-500"}
                disabled={isPending}
              >
                Create
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
