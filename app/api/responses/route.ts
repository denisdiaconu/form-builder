import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { formId, answers, respondentName, respondentEmail } = await req.json();

  const form = await prisma.form.findUnique({
    where: {
      id: formId,
    },
    include: {
      questions: true,
    },
  });

  if (!form) {
    return new NextResponse('Form not found', { status: 404 });
  }

  if (!answers || !Array.isArray(answers)) {
    return new NextResponse('Answers are required', { status: 400 });
  }

  const formResponse = await prisma.formResponse.create({
    data: {
      formId,
      respondentName,
      respondentEmail,
      answers: {
        create: answers,
      },
    },
  });

  return NextResponse.json(formResponse);
}
