import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import React from "react";
import Editor from "../_components/Editor";

interface WorkflowPageProps {
  params: {
    workflowId: string;
  };
}

const page: React.FC<WorkflowPageProps> = async ({ params }) => {
  const { workflowId } = params;
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const workflow = await prisma.workflow.findUnique({
    where: { id: workflowId, userId: userId },
  });
  if (!workflow) {
    notFound();
  }
  return <Editor workflow={workflow} />;
};

export default page;
