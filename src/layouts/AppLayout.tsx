import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/common/AppSidebar";
import { Button } from "../components/ui/button";
import { ThemeToggler } from "../components/ui/theme-toggler";
import { Bell, User } from "lucide-react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "../components/ui/sidebar";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Top Navigation */}
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
          <SidebarTrigger />

          {/* Breadcrumb atau Title bisa ditambahkan di sini */}
          <div className="flex-1">
            <h1 className="text-lg font-semibold">
              Sistem Informasi Akademik{" "}
            </h1>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggler />
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">User menu</span>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
