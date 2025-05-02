import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return <div className="space-y-6">
    <div>
        <h1 className="text-3xl font-bold">Welcome, John</h1>
        <p className="text-gray-500 mt-1">manage your forms and responses</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Your Forms</h2>
          <p className="text-3xl font-bold mt-2">12</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms">View All Forms</Link>
          </Button>
        </div>

    </div>
  </div>;
}
