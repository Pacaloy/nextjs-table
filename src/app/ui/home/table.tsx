import { fetchFilteredData } from '@/app/lib/data';
import { ViewDetails } from '@/app/ui/home/buttons';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const filteredData = await fetchFilteredData(query, currentPage);

  return (
    <div className="mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="pl-6 pr-4 py-5 font-bold">
                  ID
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Phone
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Address
                </th>
                <th scope="col" className="pl-4 pr-6 py-5 font-bold text-right">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredData?.map((data) => (
                <tr
                  key={data.id}
                  className="
                    w-full border-b py-3 text-sm last-of-type:border-none
                    [&:first-child>td:first-child]:rounded-tl-lg
                    [&:first-child>td:last-child]:rounded-tr-lg
                    [&:last-child>td:first-child]:rounded-bl-lg
                    [&:last-child>td:last-child]:rounded-br-lg
                  "
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {data.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {data.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {data.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {data.phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {data.address}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-3 pr-6">
                    <div className="flex justify-end">
                      <ViewDetails id={data.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
