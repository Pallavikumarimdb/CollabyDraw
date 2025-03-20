'use client'

import { Button } from "./ui/button";
import { useState } from "react";
import CollaborationStartdDialog from "./CollaborationStartdDialog";
import { useSession } from "next-auth/react";
import { RoomSharingDialog } from "./RoomSharingDialog";
import { usePathname } from "next/navigation";
import { CollaborationAdDialog } from "./CollaborationAdDialog";
import { cn } from "@/lib/utils";

export default function CollaborationStartBtn({ slug, participantsCount }: { slug?: string, participantsCount?: number }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();
    const roomSlug = slug;
    const decodedPathname = decodeURIComponent(pathname)

    return (
        <div className="Start_Room_Session transition-transform duration-500 ease-in-out flex items-center justify-end">
            <Button type="button" onClick={() => setIsOpen(true)}
                className={cn("excalidraw-button collab-button relative w-auto py-3 px-4 rounded-md text-[.875rem] font-semibold shadow-none active:scale-[.98]", roomSlug ? "bg-[#0fb884] dark:bg-[#0fb884] hover:bg-[#0fb884]" : "bg-color-primary hover:bg-brand-hover active:bg-brand-active")}
                title="Live collaboration...">Share {roomSlug && participantsCount && participantsCount > 0 && (
                    <div className="CollabButton-collaborators text-[.6rem] text-[#2b8a3e] bg-[#b2f2bb] font-bold font-assistant rounded-[50%] p-1 min-w-4 min-h-4 w-4 h-4 flex items-center justify-center absolute bottom-[-5px] right-[-5px]">{participantsCount}</div>
                )}</Button>

            {session?.user && session?.user.id ? (
                roomSlug ? (
                    <RoomSharingDialog open={isOpen} onOpenChange={setIsOpen} link={`${process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://collabydraw.com'}/${decodedPathname}`} />
                ) : (
                    <CollaborationStartdDialog open={isOpen} onOpenChange={setIsOpen} />
                )
            ) : (
                <CollaborationAdDialog open={isOpen} onOpenChange={setIsOpen} />
            )}
        </div>
    )
}