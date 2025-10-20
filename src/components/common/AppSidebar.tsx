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
  SidebarRail,
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
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Keuangan",
    href: "/keuangan",
    icon: <Wallet className="h-5 w-5" />,
    children: [
      {
        title: "Dashboard Keuangan",
        href: "/keuangan/dashboard",
        icon: <TrendingUp className="h-5 w-5" />,
      },
      {
        title: "Transaksi",
        href: "/keuangan/transaksi",
        icon: <Receipt className="h-5 w-5" />,
      },
      {
        title: "Tagihan Siswa",
        href: "/keuangan/tagihan",
        icon: <CreditCard className="h-5 w-5" />,
      },
      {
        title: "Laporan",
        href: "/keuangan/laporan",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Siswa",
    href: "/siswa",
    icon: <Users className="h-5 w-5" />,
    children: [
      {
        title: "Data Siswa",
        href: "/siswa/data",
        icon: <Users className="h-5 w-5" />,
      },
      {
        title: "Pembayaran",
        href: "/siswa/pembayaran",
        icon: <CreditCard className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Staff & Guru",
    href: "/staff",
    icon: <UserCheck className="h-5 w-5" />,
    children: [
      {
        title: "Data Staff",
        href: "/staff/data",
        icon: <UserCheck className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Akademik",
    href: "/akademik",
    icon: <BookOpen className="h-5 w-5" />,
    children: [
      {
        title: "Mata Pelajaran",
        href: "/akademik/mapel",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        title: "Kelas",
        href: "/akademik/kelas",
        icon: <School className="h-5 w-5" />,
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
    <Sidebar collapsible="icon" className="transition-all duration-300 ease-in-out">
      <SidebarHeader className="transition-colors duration-300">
        <div className="flex flex-col items-center gap-2 px-2 py-4 group-data-[collapsible=icon]:py-2 transition-all duration-300">
          <img
            src="/images/logo/smk1.png"
            alt="Logo SMK"
            className="h-16 w-16 rounded-lg object-cover group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 transition-all duration-300"
          />
          <span className="text-center text-sm font-semibold leading-tight group-data-[collapsible=icon]:hidden transition-opacity duration-300">
            SMK SASMITA JAYA 1
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="transition-colors duration-300">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold transition-colors duration-300">Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
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
                        className="transition-all duration-300 ease-in-out"
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton 
                            isActive={active} 
                            className="h-10 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          >
                            {item.icon}
                            <span className="text-base">{item.title}</span>
                            <ChevronRight
                              className={`ml-auto h-5 w-5 transition-all duration-300 ${
                                isItemOpen ? "rotate-90" : ""
                              }`}
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="transition-all duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
                          <SidebarMenuSub className="gap-1">
                            {item.children?.map((child) => (
                              <SidebarMenuSubItem key={child.href}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isActive(child.href)}
                                  className="h-9 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                >
                                  <Link to={child.href}>
                                    {child.icon}
                                    <span className="text-sm">{child.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton 
                        asChild 
                        isActive={active} 
                        className="h-10 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      >
                        <Link to={item.href}>
                          {item.icon}
                          <span className="text-base">{item.title}</span>
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

      <SidebarFooter className="transition-colors duration-300">
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              className="h-10 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <Link to="/settings">
                <Settings className="h-5 w-5" />
                <span className="text-base">Pengaturan</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
