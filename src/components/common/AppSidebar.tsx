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
    href: "/",
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
        <div className="flex items-center gap-3 p-4 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
          <img
            src="/images/logo/smk1.png"
            alt="Logo SMK"
            className="h-10 w-10 rounded-lg object-cover transition-all flex-shrink-0 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8"
          />
          <span className="text-sm leading-tight group-data-[collapsible=icon]:hidden">
            SMK SASMITA JAYA 1
          </span>
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
                                    {subItem.icon && <subItem.icon />}
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
