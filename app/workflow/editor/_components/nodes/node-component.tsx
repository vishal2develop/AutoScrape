import { memo } from "react";

import type { NodeProps } from "@xyflow/react";

import type { AppNodeData } from "@/types/app-node";
import type { TaskParam } from "@/types/task";

import { TaskRegistry } from "@/lib/workflow/task/registry";

import NodeCard from "./node-card";
import NodeHeader from "./node-header";
import NodeInput from "./node-input";
import NodeOutput from "./node-output";

/**
 * Memoized NodeComponent to prevent unnecessary re-renders, when the parent component re-renders but the props remain unchanged.
 * Renders a node with a header, inputs, and outputs based on its type and metadata from the TaskRegistry.
 */
const NodeComponent = memo((props: NodeProps) => {
  // Extract data specific to the node, cast to the AppNodeData type for type safety
  const nodeData = props.data as AppNodeData;
  // Fetch task metadata based on the node type from TaskRegistry
  const task = TaskRegistry[nodeData.type];

  return (
    <NodeCard isSelected={!!props.selected} nodeId={props.id}>
      <NodeHeader nodeId={props.id} taskType={nodeData.type} />

      <div className="flex flex-col gap-2 divide-y">
        {/* Render input fields dynamically based on task metadata */}
        {task.inputs.map((input) => (
          <NodeInput
            key={input.name}
            nodeId={props.id}
            param={input as TaskParam}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 divide-y">
        {/* Render output fields dynamically based on task metadata */}
        {task.outputs.map((output) => (
          <NodeOutput key={output.name} param={output as TaskParam} />
        ))}
      </div>
    </NodeCard>
  );
});

export default NodeComponent;

// Assign a display name for debugging and React DevTools
NodeComponent.displayName = "NodeComponent";
