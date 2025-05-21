'use client';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

type Form = {
  id: string;
  title: string;
  description: string | null;
  createdAt: Date;
  _count: {
    responses: number;
  };
};
type FormListProps = {
  forms: Form[];
};
export default function FormList({ forms }: FormListProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <Input
          placeholder="Search forms..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="max-w-sm"
        />
        <Button asChild>
          <Link href="/dashboard/forms/create">Create Form</Link>
        </Button>
      </div>

      {forms.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">
            No forms found. Create your first form!
          </p>
        </div>
      ) : (
        <div>
          <h1>FormCard</h1>
        </div>
      )}
    </div>
  );
}
