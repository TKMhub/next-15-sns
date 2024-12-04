import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Feed() {
  const posts = [1, 2, 3];

  return (
    <div>
      {/* New Post Input */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <Input placeholder="What's on your mind?" className="mb-2" />
              <Button>Post</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post} className="mb-6">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  src={`/placeholder-avatar-${post}.jpg`}
                  alt={`User ${post}`}
                />
                <AvatarFallback>U{post}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-semibold">User {post}</h3>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              This is a sample post content. It can be a longer text describing
              thoughts or experiences.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                Like
              </Button>
              <Button variant="ghost" size="sm">
                Comment
              </Button>
              <Button variant="ghost" size="sm">
                Share
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
