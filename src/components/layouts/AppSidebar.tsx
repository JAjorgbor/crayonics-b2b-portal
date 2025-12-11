import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Brain,
  ChartBar,
  ChartColumnIncreasing,
  GraduationCapIcon,
  Headset,
  LayoutDashboard,
  LogOut,
  NotebookTabs,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    url: "#",
    icon: NotebookTabs,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: ChartBar,
  },
  {
    title: "Integration",
    url: "/integration",
    icon: Settings,
  },
];
const bottomItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help & Support",
    url: "#",
    icon: Headset,
  },
];

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-white border-r-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex gap-2 items-center">
                <SidebarMenuButton>
                  <Brain className="text-indigo-600" size={25} />
                  <h2 className="font-bold text-lg  text-indigo-600">
                    Crayonics Academy
                  </h2>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {topItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="hover:bg-destructive/10 text-destructive!"
            >
              <Link to="/" className="flex gap-4 items-center cursor-pointer">
                <LogOut />
                <span>Sign Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
