import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function UserProfileCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">User Name</h2>
            <p className="text-sm text-gray-500">@username</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <p className="text-sm font-semibold">1,234</p>
          <p className="text-xs text-gray-500">Followers</p>
        </div>
        <div>
          <p className="text-sm font-semibold">567</p>
          <p className="text-xs text-gray-500">Following</p>
        </div>
      </CardFooter>
    </Card>
  );
}
