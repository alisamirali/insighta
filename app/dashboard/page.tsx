"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="space-y-8 w-full min-h-screen">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Websites</h1>

            <p className="text-muted-foreground text-sm">
              Manage and monitor your digital footprint across all registered
              domains.
            </p>
          </div>
          <Button onClick={() => {}}>
            <Plus className="size-4" />
            Add Website
          </Button>
        </div>
      </div>
    </>
  );
}
