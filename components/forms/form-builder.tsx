import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

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
  return <form className='space-y-8'>
    <div>
      <div>
        <Label>Title</Label>
        <Input />
      </div>
    </div>
  </form>;
}
