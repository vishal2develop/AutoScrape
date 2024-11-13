"use server";

import prisma from "@/lib/prisma";
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/schema/workflow";
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateWorkflow(form: createWorkflowSchemaType) {
  //   const { success, data, error } = createWorkflowSchema.safeParse(form);
  //   if (!success) {
  //     console.log("error:", error);

  //     throw new Error("Invalid form data");
  //   }

  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: "TODO",
      ...form,
    },
  });

  if (!result) {
    throw new Error("Failed to create workflow");
  }
  redirect(`/workflows/editor/${result.id}`);
}

// export const CreateWorkflow = async (form: createWorkflowSchemaType) => {
//   const { success, data, error } = createWorkflowSchema.safeParse(form);
//   if (!success) {
//     console.log("error:", error);

//     throw new Error("Invalid form data");
//   }

//   const { userId } = auth();

//   if (!userId) {
//     throw new Error("Unauthenticated");
//   }

//   const result = await prisma.workflow.create({
//     data: {
//       userId,
//       status: WorkflowStatus.DRAFT,
//       definition: "TODO",
//       ...data,
//     },
//   });

//   if (!result) {
//     throw new Error("Failed to create workflow");
//   }
//   redirect(`/workflows/editor/${result.id}`);
// };