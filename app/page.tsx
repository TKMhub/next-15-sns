import NavigationBar from "@/app/components/NavigationBar";
import UserProfileCard from "@/app/components/UserProfileCard";
import Feed from "@/app/components/Feed";
import TrendingTopics from "@/app/components/TrendingTopics";
import MobileNavigation from "@/app/components/MobileNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* User Profile Section */}
            <div className="lg:w-1/4">
              <UserProfileCard />
            </div>

            {/* Feed Section */}
            <div className="lg:w-2/4">
              <Feed />
            </div>

            {/* Trending / Suggestions */}
            <div className="lg:w-1/4">
              <TrendingTopics />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </div>
  );
}
