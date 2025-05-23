import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function FormResponsesPage({
  params,
}: {
  params: Promise<{ formId: string }>;
}) {
  const { userId, redirectToSignIn } = await auth();
  const { formId } = await params;

  if (!userId) return redirectToSignIn();

  const form = await prisma.form.findUnique({
    where: {
      id: formId,
      userId,
    },
    include: {
      responses: {
        include: {
          answers: {
            include: {
              question: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });
    if (!form) {
        redirect(`/dashboard/forms`);
    }
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Form Responses</h1>
          <p className="text-gray-500 mt-1">{form.title} - {form.responses.length} responses</p>
        </div>
        <Button></Button>
      </div>
    </div>
  );
}
