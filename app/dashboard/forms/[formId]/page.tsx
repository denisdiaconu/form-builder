import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function FormDetailsPage({
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
    },
    include: {
      questions: {
        orderBy: {
          order: 'asc',
        },
      },
      _count: {
        select: {
          responses: true,
        },
      },
    },
  });

  if (!form) {
    redirect(`/dashboard/forms`);
  }

  if (form.userId !== userId) {
    redirect(`/dashboard/forms`);
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{form?.title}</h1>
          {form.description && (
            <p className="text-gray-500 mt-1">{form.description}</p>
          )}
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href={`/dashboard/forms/${formId}/edit`}>Edit</Link>
          </Button>
          <Button asChild>
            <Link href={`/dashboard/forms/${formId}/responses`}>
              View Responses ({form._count.responses})
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
