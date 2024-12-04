import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TrendingTopics() {
  const topics = ["Topic 1", "Topic 2", "Topic 3"];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-semibold">Trending</h2>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li
              key={index}
              className="text-sm text-blue-600 hover:underline cursor-pointer"
            >
              #{topic}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
