import { Button } from "@/components/ui/button";
import useUpdateWorkflow from "@/hooks/use-update-workflow";
import { CheckIcon } from "lucide-react";
import React from "react";

interface SaveBtnProps {
  workflowId: string;
}

const SaveBtn = ({ workflowId }: SaveBtnProps) => {
  const { handleWorkflowSave, isPending } = useUpdateWorkflow(workflowId);
  return (
    <Button
      className="FLEX items-center gap-2"
      disabled={isPending}
      onClick={handleWorkflowSave}
      variant="outline"
    >
      <CheckIcon className="stroke-green-400" size={16} />
      Save
    </Button>
  );
};

export default SaveBtn;
