import { auth } from "@clerk/nextjs/server";

export default async function FormResponsesPage({
  params,
}: {
  params: Promise<{ formId: string }>;
}) {
    const { userId, redirectToSignIn } = await auth();
      const { formId } = await params;
    
      if (!userId) return redirectToSignIn();
  return (
    <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">Form Responses</h1>
                <p className="text-gray-500"></p>
            </div>
            <div>
                button
            </div>
        </div>
    </div>
  )
}
