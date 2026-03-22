import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      sidebar
      <main className="w-full max-w-6xl mx-auto flex flex-col">
        header
        <div className="flex-1 w-full">{children}</div>
        footer
      </main>
    </SidebarProvider>
  );
}
