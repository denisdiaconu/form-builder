'use client';
import { FormEvent, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function FormBuilder() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const addQuestion = () => {
    setForm((prev) => ({
      ...prev,
      questions: [...prev.questions, { id: uuidv4(), text: '' }],
    }));
  };

  const removeQuestion = (index: number) => {
    if (form.questions.length > 1) {
      setForm((prev) => ({
        ...prev,
        questions: prev.questions.filter((_, i) => i !== index),
      }));
    } else {
      toast.error('You must have at least one question');
    }
  };

  const handleQuestionChange = (index: number, value: string) => {
    const updatedQuestions = [...form.questions];
    updatedQuestions[index].text = value;
    setForm({ ...form, questions: updatedQuestions });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.title.trim()) {
      toast.error('Title is required');
      return;
    }

    const emptyQuestions = form.questions.some((q) => !q.text.trim());
    if (emptyQuestions) {
      toast.error('All questions must be filled out');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      const data = await response.json();
      toast.success('Form created successfully!', {
        description: 'Your form has been saved successfully.',
      });
      router.push(`/dashboard/forms/${data.id}`);
      router.refresh();
    } catch (error) {
      console.error('Error saving form:', error);
      toast.error('Error', {
        description: 'Something went wrong while saving your form.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
          <Button variant="outline" type="button" onClick={addQuestion}>
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
                onClick={() => removeQuestion(index)}
              >
                remove
              </Button>
            </div>
            <Textarea
              className="mt-1"
              id={`Question-${index}`}
              value={question.text}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              placeholder="Enter your question"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2">
        <Button
          type="button"
          disabled={isSubmitting}
          variant="outline"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Create Form'}
        </Button>
      </div>
    </form>
  );
}
