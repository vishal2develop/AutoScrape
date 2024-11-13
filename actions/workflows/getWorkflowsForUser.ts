"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const GetWorkflowsForUser = async () => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("UnAuthenticated");
  }
  return prisma.workflow.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};
