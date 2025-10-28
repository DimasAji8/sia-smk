import { Link } from "react-router-dom";
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
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

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
  return (
    <Sidebar collapsible="icon" className="sidebar">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center justify-start gap-3 p-4 transition-all duration-300 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:gap-0">
          <div className="flex items-center justify-center flex-shrink-0 w-12 transition-all duration-300">
            <img
              src="/images/logo/sivia-light.png"
              alt="Logo SIVIA"
              className="h-12 w-auto max-w-full object-contain transition-all duration-300 group-data-[collapsible=icon]:h-8 dark:hidden"
            />
            <img
              src="/images/logo/sivia-dark.png"
              alt="Logo SIVIA"
              className="h-12 w-auto max-w-full object-contain transition-all duration-300 group-data-[collapsible=icon]:h-8 hidden dark:block"
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
                  return (
                    <Collapsible key={item.title} asChild defaultOpen className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <Link to={subItem.href}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                // Menu tanpa submenu
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
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

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Pengaturan">
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
