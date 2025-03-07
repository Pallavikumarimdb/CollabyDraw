"use client"

import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface SidebarTriggerButtonProps {
    onClick: () => void;
}

const SidebarTriggerButton = memo(function SidebarTriggerButton({ onClick }: SidebarTriggerButtonProps) {
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={onClick}
            className="mr-2 bg-[#ececf4] dark:bg-w-bg dark:hover:bg-w-button-hover-bg border-none surface-box-shadow p-2.5 rounded-lg hidden md:flex"
            data-sidebar-trigger
        >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
        </Button>
    );
});

export default SidebarTriggerButton;