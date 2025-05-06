import { useState } from 'react';

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
  return <div>FormBuilder</div>;
}
