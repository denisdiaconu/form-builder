import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const { title, description, questions } = await req.json();
  if (!title) {
    return new NextResponse('Title is required', { status: 400 });
  }

  if (!questions || questions.length === 0) {
    return new NextResponse('At least one question is required', {
      status: 400,
    });
  }
}
