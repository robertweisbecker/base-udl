import {
  GearSix,
  BookOpen,
  Stack,
  SignOut,
  UserCircle,
  MapPin,
} from "@phosphor-icons/react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-auto items-center rounded-full p-0 outline-none hover:opacity-80">
        <Avatar>
          <AvatarImage alt="Profile image" src="/placeholder-course-1.jpg" />
          <AvatarFallback>KK</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate font-semibold text-foreground text-sm">
            Keith Kennedy
          </span>
          <span className="truncate font-normal text-muted-foreground text-xs">
            k.kennedy@coss.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <GearSix aria-hidden="true" className="opacity-60" size={16} />
            <span>Option 1</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Stack aria-hidden="true" className="opacity-60" size={16} />
            <span>Option 2</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BookOpen aria-hidden="true" className="opacity-60" size={16} />
            <span>Option 3</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <MapPin aria-hidden="true" className="opacity-60" size={16} />
            <span>Option 4</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserCircle aria-hidden="true" className="opacity-60" size={16} />
            <span>Option 5</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut aria-hidden="true" className="opacity-60" size={16} />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
