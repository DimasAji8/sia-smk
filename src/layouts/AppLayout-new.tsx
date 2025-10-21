import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/common/AppSidebar-new";
import { Button } from "../components/ui/button";
import { ThemeToggler } from "../components/ui/theme-toggler";
import { Bell, User } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "../components/ui/sidebar";
import { Separator } from "../components/ui/separator";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Top Navigation */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-card/80 backdrop-blur-sm px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>

          <div className="flex-1"></div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggler />
            <Button variant="outline" size="icon" className="h-9 w-9">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <User className="h-4 w-4" />
              <span className="sr-only">User menu</span>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
