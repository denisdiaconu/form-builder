'use client';
import { FormEvent, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

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
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Questions</h3>
          <Button variant="outline" type="button">
            Add Question
          </Button>
        </div>
        {form.questions.map((question, index) => (
          <div key={question.id} className="space-y-2 p-4 border rounded-md">
            <div className="flex items-center justify-between">
              <Label htmlFor={`Question-${index}`}>Question {index + 1}</Label>
              <Button
                className="text-red-500 hover:text-red-700"
                type="button"
                size="sm"
                variant="ghost"
              >
                remove
              </Button>
            </div>
            <Textarea
              className="mt-1"
              id={`Question-${index}`}
              value={question.text}
              onChange={(e) => {}}
              placeholder="Enter your question"
            />
          </div>
        ))}
      </div>
      <div className='flex justify-end gap-2'>
        <Button type='button' variant='outline' onClick={() => {}}>Cancel</Button>
        <Button type='submit'>Save</Button>
      </div>
    </form>
  );
}
