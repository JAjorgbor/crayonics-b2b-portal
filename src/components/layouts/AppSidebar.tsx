import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Brain,
  ChartColumnIncreasing,
  GraduationCapIcon,
  Headset,
  LayoutDashboard,
  LogOut,
  NotebookTabs,
  Settings,
  Users,
  Settings2,
  BarChart3,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const topItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    url: "/students",
    icon: GraduationCapIcon,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: NotebookTabs,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartColumnIncreasing,
  },
];
const bottomItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    url: "/help",
    icon: Headset,
  },
];

function AppSidebar() {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();
  const { hasPermission } = useAuth();

  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname]);
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-white border-r-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex gap-2 items-center">
                <SidebarMenuButton>
                  <Brain
                    className="text-indigo-600 transform scale-150"
                    size={25}
                  />
                  <h2 className="font-bold text-lg  text-indigo-600">
                    Crayonics Academy
                  </h2>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {topItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname.startsWith(item.url)}
                    className="data-[active=true]:text-indigo-500"
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Administration Group */}
        {hasPermission("view:admin_dashboard") && (
          <SidebarGroup>
            <div className="px-2 py-2">
              <h3 className="mb-2 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Administration
              </h3>
              <SidebarMenu>
                {hasPermission("manage:users") && (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname.startsWith("/admin/users")}
                    >
                      <Link to="/admin/users">
                        <Users />
                        <span>User Management</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
                {hasPermission("view:reports_tier1") && (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname.startsWith("/reports")}
                    >
                      <Link to="/reports">
                        <BarChart3 />
                        <span>Reports & Analytics</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
                {hasPermission("manage:system") && (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname.startsWith("/admin/system")}
                    >
                      <Link to="/admin/system">
                        <Settings2 />
                        <span>System Config</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </div>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname.startsWith(item.url)}
                className="data-[active=true]:text-indigo-500"
              >
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
