import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className="bg-white border-b border-gray-200 py-4">
        <div className='container mx-auto px-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Form Builder</h1>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>
      <div className="bg-blue-50 flex-1">main</div>
    </div>
  );
}
