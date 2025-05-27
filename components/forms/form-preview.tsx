'use client'
import { Question } from '@/lib/generated/prisma';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useState } from 'react';

type FormPreviewProps = {
  form: {
    id: string;
    title: string;
    description: string | null;
    questions: Question[];
  };
};
export default function FormPreview({ form }: FormPreviewProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{form.title}</h1>
        {form.description && (
          <p className="mt-2 text-gray-600">{form.description}</p>
        )}
      </div>
      <form>
        <div className="space-y-4">
          <Label>Your Name (Optional)</Label>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1"
          />
        </div>
        <div className="space-y-4">
          <Label>Your Email (Optional)</Label>
          <Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1"
          />
        </div>
      </form>
    </div>
  );
}
