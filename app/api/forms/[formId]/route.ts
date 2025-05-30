import prisma from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ formId: string }> }
) {
  const { userId } = await auth();
  const { formId } = await params;

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const form = await prisma.form.findUnique({
    where: {
      id: formId,
    },
  });

  if (!form) {
    return new NextResponse('Form not found', { status: 404 });
  }

  if (form.userId !== userId) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  await prisma.form.delete({
    where: {
      id: formId,
    },
  });

  return NextResponse.json({ success: true });
}
