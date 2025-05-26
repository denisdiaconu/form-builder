import { Question } from '@/lib/generated/prisma';

type FormPreviewProps = {
  form: {
    id: string;
    title: string;
    description: string | null;
    questions: Question[];
  };
};
export default function FormPreview({ form }: FormPreviewProps) {
  return <div>form pre</div>;
}
