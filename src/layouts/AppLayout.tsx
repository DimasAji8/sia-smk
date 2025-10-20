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
      <div className="flex min-h-screen w-full bg-background transition-colors duration-300">
        <AppSidebar />
        <SidebarInset className="transition-all duration-300 ease-in-out">
          {/* Top Navigation */}
          <header className="flex h-16 items-center gap-4 border-b bg-card px-4 shadow-sm transition-colors duration-300 lg:px-6">
            <SidebarTrigger />

            {/* Breadcrumb atau Title bisa ditambahkan di sini */}
            <div className="flex-1">
              <h1 className="text-xl font-semibold">
                Sistem Informasi Akademik
              </h1>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggler />
              <Button 
                variant="outline" 
                size="icon" 
                className="h-10 w-10 transition-all duration-200"
              >
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-10 w-10 transition-all duration-200"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6 transition-colors duration-300 lg:p-8">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
