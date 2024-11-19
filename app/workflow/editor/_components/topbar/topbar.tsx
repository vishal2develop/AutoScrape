"use client";
import React from "react";
import type { FC } from "react";

import { useRouter } from "next/navigation";

import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import SaveBtn from "./save-btn";
import TooltipWrapper from "@/components/TooltipWrapper";

interface Topbarprops {
  title: string;
  subtitle?: string;
  workflowId: string;
}

const Topbar = ({ subtitle, title, workflowId }: Topbarprops) => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 flex h-[60px] w-full border-separate justify-between border-b-2 bg-background p-2">
      <div className="flex flex-1 items-center gap-1">
        <TooltipWrapper content="Back">
          <Button onClick={() => router.back()} variant="ghost">
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
        </TooltipWrapper>

        <div>
          <p className="truncate text-ellipsis font-bold">{title}</p>
          {subtitle && (
            <p className="truncate text-ellipsis text-xs text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-1">
        <SaveBtn workflowId={workflowId} />
      </div>
    </header>
  );
};

export default Topbar;
