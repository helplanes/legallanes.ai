"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils"; // Ensure this utility function exists

export function Sheet({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

export function SheetTrigger({
  asChild,
  children,
}: {
  asChild?: boolean;
  children: React.ReactNode;
}) {
  return <Dialog.Trigger asChild={asChild}>{children}</Dialog.Trigger>;
}

export function SheetContent({
  children,
  side,
  className, // ✅ Added className prop
}: {
  children: React.ReactNode;
  side: "left" | "right" | "top" | "bottom";
  className?: string;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      <Dialog.Content
        className={cn(
          "fixed top-0 h-full w-64 bg-white shadow-lg p-4",
          side === "left" ? "left-0" : "right-0",
          className // ✅ Use className prop properly
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
