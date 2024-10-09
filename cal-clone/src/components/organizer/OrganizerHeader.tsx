import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CalendarDays } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useUser } from "@/hooks/use-user";

export const OrganizerHeader = () => {
  const { userData } = useUser();
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <CalendarDays className="h-6 w-6 mr-2" />
        <h1 className="text-xl font-bold">Calendly Clone</h1>
        <nav className="ml-auto flex items-center space-x-4">
          <Button variant="ghost">Dashboard</Button>
          <Avatar>
            <AvatarImage
              height={"32"}
              width={"32"}
              className="rounded"
              src={userData.avatarUrl}
              alt="@username"
            />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
  );
};
