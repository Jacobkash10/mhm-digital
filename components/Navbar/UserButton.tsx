import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";
import { Lock, LogOut, Settings, User as Use, } from "lucide-react";
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";
// import { signOut } from "@/auth";

interface UserButtonProps {
  user: User;
}

export default function UserButton({ user }: UserButtonProps) {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="flex-none rounded-full bg-white border-2 border-blue-300">
          <Image
            src={user.image || avatarPlaceholder}
            alt="User profile picture"
            width={40}
            height={40}
            className="aspect-square rounded-full bg-red-500 object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <DropdownMenuItem asChild>
            <Link href={`/user/${user.id}`} className="cursor-pointer">
              <Use className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          {user.role === 'ADMIN' && <DropdownMenuItem asChild>
                <Link href="/admin" className="cursor-pointer">
                  <Lock className="mr-2 h-4 w-4" />
                  Admin
                </Link>
          </DropdownMenuItem>}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild> 
          <button onClick={() => signOut({callbackUrl: '/'})} className="flex w-full items-center cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
