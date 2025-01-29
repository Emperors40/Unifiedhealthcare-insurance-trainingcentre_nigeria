"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Share2, Users } from "lucide-react"

export function Collaboration() {
  return (
    <div className="absolute top-4 right-4 flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Users className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Active Users</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Doe</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <span>Jane Smith</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

