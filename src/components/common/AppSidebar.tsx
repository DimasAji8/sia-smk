import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  BookOpen,
  Settings,
  Receipt,
  TrendingUp,
  FileText,
  CreditCard,
  School,
  Wallet,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Keuangan",
    icon: Wallet,
    items: [
      {
        title: "Dashboard Keuangan",
        href: "/keuangan/dashboard",
        icon: TrendingUp,
      },
      {
        title: "Transaksi",
        href: "/keuangan/transaksi",
        icon: Receipt,
      },
      {
        title: "Tagihan Siswa",
        href: "/keuangan/tagihan",
        icon: CreditCard,
      },
      {
        title: "Laporan",
        href: "/keuangan/laporan",
        icon: FileText,
      },
    ],
  },
  {
    title: "Siswa",
    icon: Users,
    items: [
      {
        title: "Data Siswa",
        href: "/siswa/data",
        icon: Users,
      },
      {
        title: "Pembayaran",
        href: "/siswa/pembayaran",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Staff & Guru",
    icon: UserCheck,
    items: [
      {
        title: "Data Staff",
        href: "/staff/data",
        icon: UserCheck,
      },
    ],
  },
  {
    title: "Akademik",
    icon: BookOpen,
    items: [
      {
        title: "Mata Pelajaran",
        href: "/akademik/mapel",
        icon: BookOpen,
      },
      {
        title: "Kelas",
        href: "/akademik/kelas",
        icon: School,
      },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  // Helper function to check if a route is active
  const isActiveRoute = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  // Helper function to check if any submenu is active
  const hasActiveSubmenu = (items: typeof menuItems[0]['items']) => {
    if (!items) return false;
    return items.some(subItem => isActiveRoute(subItem.href));
  };

  return (
    <Sidebar collapsible="icon" className="sidebar">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center justify-start gap-3 p-4 transition-all duration-300 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:gap-0">
          <div className="flex items-center justify-center flex-shrink-0 w-10 transition-all duration-300">
            <img
              src="/images/logo/sivia-light.png"
              alt="Logo SIVIA"
              className="h-10 w-auto max-w-full object-contain transition-all duration-300 group-data-[collapsible=icon]:h-7 dark:hidden"
            />
            <img
              src="/images/logo/sivia-dark.png"
              alt="Logo SIVIA"
              className="h-10 w-auto max-w-full object-contain transition-all duration-300 group-data-[collapsible=icon]:h-7 hidden dark:block"
            />
          </div>
          <div className="flex flex-col transition-all duration-300 group-data-[collapsible=icon]:hidden group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0 overflow-hidden">
            <span className="text-2xl font-bold leading-tight whitespace-nowrap">
              SIVIA
            </span>
            <span className="text-[12px] leading-tight text-muted-foreground whitespace-nowrap">
              Sistem Informasi &
            </span>
            <span className="text-[11px] leading-tight text-muted-foreground whitespace-nowrap">
              Visualisasi Data Akademik
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                // Menu dengan submenu
                if (item.items && item.items.length > 0) {
                  const hasActive = hasActiveSubmenu(item.items);
                  
                  return (
                    <Collapsible key={item.title} asChild defaultOpen className="group/collapsible">
                      <SidebarMenuItem>
                        {isCollapsed ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <SidebarMenuButton 
                                tooltip={!hasActive ? item.title : undefined}
                                isActive={hasActive}
                              >
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                              </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent 
                              side="right" 
                              align="start"
                              className="w-48"
                            >
                              <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
                              <DropdownMenuSeparator className="bg-border dark:bg-muted-foreground/20 h-[2px]" />
                              {item.items.map((subItem) => (
                                <DropdownMenuItem key={subItem.title} asChild>
                                  <Link to={subItem.href} className="cursor-pointer">
                                    <span>{subItem.title}</span>
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton 
                                tooltip={!hasActive ? item.title : undefined}
                                isActive={hasActive}
                              >
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                              <SidebarMenuSub>
                                {item.items.map((subItem) => (
                                  <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton asChild isActive={isActiveRoute(subItem.href)}>
                                      <Link to={subItem.href}>
                                        <span>{subItem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </>
                        )}
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                // Menu tanpa submenu
                const isActive = item.href ? isActiveRoute(item.href) : false;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={!isActive ? item.title : undefined}
                      isActive={isActive}
                    >
                      <Link to={item.href!}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              tooltip={!isActiveRoute('/settings') ? "Pengaturan" : undefined}
              isActive={isActiveRoute('/settings')}
            >
              <Link to="/settings">
                <Settings />
                <span>Pengaturan</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
