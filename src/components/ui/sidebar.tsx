"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Mobile Sidebar Button */}
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="md:hidden fixed top-4 left-4 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </Button>
      </SheetTrigger>

      {/* Sidebar Content */}
      <SheetContent side="left" className="w-64 bg-white p-4 shadow-lg">
        <h2 className="text-lg font-bold mb-4">LegalLanes.AI</h2>
        <ul className="space-y-3">
          <li className="p-2 hover:bg-gray-200 rounded">Dashboard</li>
          <li className="p-2 hover:bg-gray-200 rounded">History</li>
          <li className="p-2 hover:bg-gray-200 rounded">Settings</li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
