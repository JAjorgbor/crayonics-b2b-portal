import AppSidebar from "@/components/layouts/AppSidebar";
import Header from "@/components/layouts/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const PortalLayout = () => {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full">
                    <Header />
                    <div className="bg-gray-100 w-full min-h-screen">

                        <Outlet />
                    </div>
                </main>
            </SidebarProvider>
        </>
    );
}

export default PortalLayout;