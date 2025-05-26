import FormPreview from '@/components/forms/form-preview';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function PublicFormPage({
  params,
}: {
  params: Promise<{ formId: string }>;
}) {
  const { formId } = await params;

  const form = await prisma.form.findUnique({
    where: {
      id: formId,
    },
    include: {
      questions: {
        orderBy: {
          order: 'asc',
        },
      },
    },
  });

  if (!form) {
    return notFound()
  }
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="bg-white container max-w-3xl mx-auto p-6 rounded-lg shadow">
        <FormPreview form={form}/>
      </div>
    </div>
  );
}
