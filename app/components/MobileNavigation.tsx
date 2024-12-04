import { Bell, Home, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileNavigation() {
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around">
        <Button variant="ghost" size="icon" className="py-4">
          <Home className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="py-4">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="py-4">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="py-4">
          <MessageCircle className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
}
