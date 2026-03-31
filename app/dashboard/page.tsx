"use client";

import { getWebsites } from "@/app/action/website";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Calendar, Globe, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AddWebsiteDialog } from "./_common/add-website-dialog";

export default function DashboardPage() {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["websites"],
    queryFn: async () => {
      const res = await getWebsites();
      if (res?.error) throw new Error(res.error);
      return res.websites;
    },
  });

  return (
    <>
      <div className="space-y-8 w-full min-h-screen">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-8">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Websites</h1>

            <p className="text-muted-foreground text-sm">
              Manage and monitor your digital footprint across all registered
              domains.
            </p>
          </div>
          <Button onClick={() => setOpen(true)}>
            <Plus className="size-4" />
            Add Website
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Array.from({ length: 6 }, (_, i) => (
              <Skeleton key={i} className="h-44 w-full rounded-2xl" />
            ))}
          </div>
        ) : !data || data.length === 0 ? (
          <Empty>
            <EmptyHeader>
              <EmptyMedia
                variant="icon"
                className="size-16 rounded-full bg-primary/5 text-primary/40"
              >
                <Globe className="size-10" />
              </EmptyMedia>
              <EmptyTitle>No website found</EmptyTitle>
              <EmptyDescription>
                Start by adding your first domain to begin tracking powerful
                analytics in real-time.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" onClick={() => setOpen(true)}>
                <Plus className="size-4" />
                Add Website
              </Button>
            </EmptyContent>
          </Empty>
        ) : (
          <div
            className="
               grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          >
            {data?.map((item, index) => (
              <Link
                key={index}
                href={`/dashboard/${item.id}`}
                className="group block"
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="pb-0!">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Globe className="size-5" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold truncate pr-8 group-hover:text-primary transition-colors">
                      {item.domain}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-4!">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                      <Calendar className="size-3.5" />
                      <span>
                        Added{" "}
                        {format(new Date(item.created_at), "MMMM d, yyyy")}
                      </span>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary underline underline-offset-4 decoration-primary/30 group-hover:decoration-primary transition-all">
                        View Stats
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>

      <AddWebsiteDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
