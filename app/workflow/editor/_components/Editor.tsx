"use client";
import React from "react";

import { Workflow } from "@prisma/client";
import { ReactFlowProvider } from "@xyflow/react";
import Topbar from "./topbar/topbar";
import TaskMenu from "./taskMenu";
import FlowEditor from "./flowEditor";

interface EditorProps {
  workflow: Workflow;
}

const Editor = ({ workflow }: EditorProps) => {
  return (
    <ReactFlowProvider>
      <Topbar
        subtitle={workflow.name}
        title="Workflow Editor"
        workflowId={workflow.id}
      />
      <div className="flex h-full w-full flex-col overflow-hidden">
        <section className="flex h-full overflow-auto">
          <TaskMenu />
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
};

export default Editor;
