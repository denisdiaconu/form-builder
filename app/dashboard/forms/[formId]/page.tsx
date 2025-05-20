import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

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
        }
      },
      _count: {
        select: {
          responses: true,
        }
      }
    }
  });
  console.log('form', form);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1></h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}
