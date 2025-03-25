import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, LogOut } from 'lucide-react';

const UserInfo = ({ handleLogout }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-right hidden sm:block">
        <p className="font-medium">Username</p>
        {/* <p className="text-sm text-muted-foreground">Premium User</p> */}
      </div>
      <Avatar className="h-10 w-10 border-2 border-primary/20">
        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" />
        <AvatarFallback>
          <User size={20} />
        </AvatarFallback>
      </Avatar>
      <Button 
        className="rounded-full h-8 w-8 shadow-lg" 
        variant="outline"
        onClick={handleLogout}
      >
        <LogOut />
      </Button>
    </div>
  );
};

export default UserInfo; 