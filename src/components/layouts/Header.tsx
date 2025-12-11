import { useSidebar } from "@/components/ui/sidebar";
import { Bell, Menu } from "lucide-react";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="max-w-7xl mx-auto bg-white">
      <div className="flex justify-between p-2">
        <div className="flex gap-2 items-center w-1/4">
          <button onClick={() => toggleSidebar()} className="cursor-pointer">
            <Menu size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/images/avatar.png"
            alt="Mercy Daniels"
            className="w-10 h-10 rounded-full"
          />
          Mercy Daniels
          <button
            type="button"
            className="rounded-full p-2 text-indigo-600 bg-indigo-100"
          >
            <Bell size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
