import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ThemeModeToggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <main className="flex-1">{children}</main>

      <Separator />

      <footer className="p-2 flex justify-between items-center">
        <Logo fontSize="text-xl" iconSize={16} />
        <ModeToggle />
      </footer>
    </div>
  );
};

export default layout;
