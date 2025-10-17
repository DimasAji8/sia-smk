import { useState } from "react";
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
  SidebarSeparator,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import type { MenuItem } from "../../types";

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "Keuangan",
    href: "/keuangan",
    icon: <Wallet className="h-4 w-4" />,
    children: [
      {
        title: "Dashboard Keuangan",
        href: "/keuangan/dashboard",
        icon: <TrendingUp className="h-4 w-4" />,
      },
      {
        title: "Transaksi",
        href: "/keuangan/transaksi",
        icon: <Receipt className="h-4 w-4" />,
      },
      {
        title: "Tagihan Siswa",
        href: "/keuangan/tagihan",
        icon: <CreditCard className="h-4 w-4" />,
      },
      {
        title: "Laporan",
        href: "/keuangan/laporan",
        icon: <FileText className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Siswa",
    href: "/siswa",
    icon: <Users className="h-4 w-4" />,
    children: [
      {
        title: "Data Siswa",
        href: "/siswa/data",
        icon: <Users className="h-4 w-4" />,
      },
      {
        title: "Pembayaran",
        href: "/siswa/pembayaran",
        icon: <CreditCard className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Staff & Guru",
    href: "/staff",
    icon: <UserCheck className="h-4 w-4" />,
    children: [
      {
        title: "Data Staff",
        href: "/staff/data",
        icon: <UserCheck className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Akademik",
    href: "/akademik",
    icon: <BookOpen className="h-4 w-4" />,
    children: [
      {
        title: "Mata Pelajaran",
        href: "/akademik/mapel",
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        title: "Kelas",
        href: "/akademik/kelas",
        icon: <School className="h-4 w-4" />,
      },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleOpen = (href: string) => {
    setOpenItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <span className="text-lg font-semibold">SMK SASMITA JAYA 1</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isItemOpen = openItems.includes(item.href);
                const active = isActive(item.href);

                return (
                  <SidebarMenuItem key={item.href}>
                    {hasChildren ? (
                      <Collapsible
                        open={isItemOpen}
                        onOpenChange={() => toggleOpen(item.href)}
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton isActive={active}>
                            {item.icon}
                            <span>{item.title}</span>
                            <ChevronRight
                              className={`ml-auto h-4 w-4 transition-transform ${
                                isItemOpen ? "rotate-90" : ""
                              }`}
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children?.map((child) => (
                              <SidebarMenuSubItem key={child.href}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isActive(child.href)}
                                >
                                  <Link to={child.href}>
                                    {child.icon}
                                    <span>{child.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild isActive={active}>
                        <Link to={item.href}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/settings">
                <Settings className="h-4 w-4" />
                <span>Pengaturan</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
