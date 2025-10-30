import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/common/AppSidebar";
import { Button } from "../components/ui/button";
import { ThemeToggler } from "../components/ui/theme-toggler";
import { Bell, Search } from "lucide-react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "../components/ui/sidebar";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

export function AppLayout() {
  // Get current date
  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date().toLocaleDateString('id-ID', options);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Top Navigation - MENGIKUTI PATTERN RESMI SHADCN */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] duration-200 ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16">
          <div className="flex items-center gap-3 px-4 min-w-0 transition-all duration-300">
            <SidebarTrigger className="flex-shrink-0 h-9 w-9 border border-border rounded-sm hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent" />
            <Separator orientation="vertical" className="h-4 flex-shrink-0" />
            <div className="flex items-center gap-3 min-w-0">
              <img
                src="/images/logo/smk1.png"
                alt="Logo SMK"
                className="h-7 w-auto object-contain flex-shrink-0 dark:hidden"
              />
              <img
                src="/images/logo/smk1.png"
                alt="Logo SMK"
                className="h-8 w-auto object-contain flex-shrink-0 hidden dark:block"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold leading-tight whitespace-nowrap">SMK SASMITA JAYA 1</span>
              </div>
            </div>
          </div>

          {/* Center - Date */}
          <div className="flex-1 flex justify-center items-center px-4">
            <p className="text-sm font-medium whitespace-nowrap">
              {getCurrentDate()}
            </p>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 px-4 flex-shrink-0">
            {/* Search Bar */}
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-9 bg-background/50 dark:bg-sidebar-accent border-border focus-visible:ring-primary"
              />
            </div>

            <ThemeToggler />
            
            <Button variant="ghost" size="icon" className="h-10 w-10 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              <span className="sr-only">Notifications</span>
            </Button>

            {/* User Profile */}
            <Button variant="ghost" className="gap-2 h-10">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                DE
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">DEV SUPERADMIN</span>
                <span className="text-xs text-muted-foreground">Super User</span>
              </div>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex flex-1 flex-col gap-4 px-10 py-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
