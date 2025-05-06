'use client';
import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function FormBuilder() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    questions: [
      {
        id: '1',
        text: '',
      },
    ],
  });
  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            className="mt-1"
            id="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter form title"
          />
        </div>
        <div>
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            className="mt-1"
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Enter form description"
          />
        </div>
      </div>
    </form>
  );
}
