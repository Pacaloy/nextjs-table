import Link from "next/link";
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export function ViewDetails({ id }: { id: number }) {
  return (
    <Link
      href={`/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <InformationCircleIcon className="w-5" />
    </Link>
  );
}
