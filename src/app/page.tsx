import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/home/pagination';
import Search from '@/app/ui/home/search';
import Table from '@/app/ui/home/table';
import { fetchTablePages } from '@/app/lib/data';

export default async function Home({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchTablePages(query);

  return (
    <main className="flex-grow p-6">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>Table</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <Search placeholder="Search name..." />
        </div>
        <Table query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </main>
  );
}
