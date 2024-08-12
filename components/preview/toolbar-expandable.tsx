"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Folder, MessageCircle, User, WalletCards } from "lucide-react";

type ToolbarItem = {
  id: number;
  label: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

const ITEMS: ToolbarItem[] = [
  {
    id: 1,
    label: "User",
    title: <User className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1 text-zinc-700">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-400" />
          <span>Ibelick</span>
        </div>
        <button
          className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          Edit Profile
        </button>
      </div>
    ),
  },
  {
    id: 2,
    label: "Messages",
    title: <MessageCircle className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="text-zinc-700">You have 3 new messages.</div>
        <button
          className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          View more
        </button>
      </div>
    ),
  },
  {
    id: 3,
    label: "Documents",
    title: <Folder className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col text-zinc-700">
          <div className="space-y-1">
            <div>Project_Proposal.pdf</div>
            <div>Meeting_Notes.docx</div>
            <div>Financial_Report.xls</div>
          </div>
        </div>
        <button
          className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          Manage documents
        </button>
      </div>
    ),
  },
  {
    id: 4,
    label: "Wallet",
    title: <WalletCards className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col text-zinc-700">
          <span>Current Balance</span>
          <span>$1,250.32</span>
        </div>
        <button
          className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          View Transactions
        </button>
      </div>
    ),
  },
];

export default function ToolbarExpandable() {
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [prevActive, setPrevActive] = useState<number | null>(null);

  return (
    <div className="absolute bottom-8" ref={container}>
      <div className="h-full w-full rounded-xl border border-zinc-950/10 bg-white">
        <div className="overflow-hidden opacity-0" ref={contentRef}>
          <div className="content">
            {ITEMS.map((item) => {
              const isSelected = active === item.id;

              return (
                <div className="item" key={item.id}>
                  <div
                    className={cn(
                      "px-2 pt-2 text-sm",
                      isSelected ? "block" : "hidden",
                    )}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="menu flex space-x-2 p-2">
          {ITEMS.map((item) => (
            <button
              key={item.id}
              aria-label={item.label}
              className={cn(
                "relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]",
                active === item.id ? "bg-zinc-100 text-zinc-800" : "",
              )}
              type="button"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
