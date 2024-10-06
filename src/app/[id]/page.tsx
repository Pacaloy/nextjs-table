import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchDataById } from '@/app/lib/data';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Details',
};
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const data = await fetchDataById(id);

  if (!data) {
    notFound();
  }

  return (
    <main className='p-6 flex-grow'>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Table', href: '/' },
          {
            label: 'Details',
            href: `/${id}`,
            active: true,
          },
        ]}
      />
      <div className="rounded-lg bg-gray-50 p-4 flex">
        <div>
          <UserCircleIcon className="w-60" />
        </div>
        <div className="p-4 flex-grow">
          <div className="mb-4">
            <div className="mb-2 text-sm font-bold">ID:</div>
            <div className="px-4 py-2 bg-white rounded-lg text-md">{data.id}</div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-sm font-bold">Name:</div>
            <div className="px-4 py-2 bg-white rounded-lg text-md">{data.name}</div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-sm font-bold">Email:</div>
            <div className="px-4 py-2 bg-white rounded-lg text-md">{data.email}</div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-sm font-bold">Phone:</div>
            <div className="px-4 py-2 bg-white rounded-lg text-md">{data.phone}</div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-sm font-bold">Address:</div>
            <div className="px-4 py-2 bg-white rounded-lg text-md">{data.address}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
