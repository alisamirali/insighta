"use client";

import { InsightaLogo } from "@/components/insighta-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ChevronsLeft, ChevronsRight, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";

  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      exact: true,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
      exact: false,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/dashboard">
          <InsightaLogo showText={!collapsed} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="space-y-3">
            {items.map((item) => {
              const isActive = item.exact
                ? pathname === item.url
                : pathname.startsWith(item.url);
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton
          onClick={toggleSidebar}
          tooltip="Toggle sidebar"
          className="w-full cursor-pointer"
        >
          {collapsed ? <ChevronsRight /> : <ChevronsLeft />}
          <span>Collapse</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
