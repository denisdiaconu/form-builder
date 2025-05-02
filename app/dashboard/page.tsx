import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="space-y-6">
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
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Total Responses</h2>
          <p className="text-3xl font-bold mt-2">100</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-xl font-medium">Create New</h2>
          <p className="text-gray-500 mt-2">Start building a new form</p>
          <Button className="mt-4" asChild>
            <Link href="/dashboard/forms/create">Create Form</Link>
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 border">
        <h2 className="text-xl font-medium mb-4">Recent Forms</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="font-medium">This is the title</h3>
              <p className="text-sm text-gray-500">
                responses . Created on 21 April 2025
              </p>
            </div>
            <div className="flex gap-2">
              <Button>
                <Link href={`/dashboard/forms/123`}>View</Link>
              </Button>
              <Button>
                <Link href={`/dashboard/forms/123/responses`}>
                  Responses
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
