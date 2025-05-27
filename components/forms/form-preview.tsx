'use client'
import { Question } from '@/lib/generated/prisma';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useState } from 'react';
import { Textarea } from '../ui/textarea';

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
  const [answers, setAnswers] = useState(
    form.questions.map((q) => ({ questionId: q.id, text: "" }))
  );
  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{form.title}</h1>
        {form.description && (
          <p className="mt-2 text-gray-600">{form.description}</p>
        )}
      </div>
      <form className='space-y-6'>
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
        <div className="space-y-6">
          {form.questions
            .sort((a, b) => a.order - b.order)
            .map((question, index) => (
              <div key={question.id} className="space-y-2">
                <Label className="font-medium">
                  {index + 1}. {question.text}
                </Label>
                <Textarea
                  placeholder="Your answer"
                  value={
                    answers.find((a) => a.questionId === question.id)?.text ||
                    ""
                  }
                  onChange={(e) =>
                    handleAnswerChange(question.id, e.target.value)
                  }
                />
              </div>
            ))}
        </div>

      </form>
    </div>
  );
}
