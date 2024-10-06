import { DataTable } from './definitions';
import Data from './MOCK_DATA.json';

const ITEMS_PER_PAGE = 6;

// For fetching data depending on the queried string, fetches all the data when queried string is empty
export async function fetchFilteredData(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data: DataTable[] = Data;
    const filteredData = (
      data
      .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(offset, offset + ITEMS_PER_PAGE)
    );

    return filteredData;
  } catch (error) {
    console.error(error);

    throw new Error('Failed to fetch data.');
  }
}

// For fetching total number of pages depending on the filtered data by the queried string
export async function fetchTablePages(query: string) {
  try {
    const data: DataTable[] = Data;
    const dataCount = data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).length;
    const totalPages = Math.ceil(dataCount / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error(error);

    throw new Error('Failed to fetch total number of pages.');
  }
}

// For fetching individual data
export async function fetchDataById(id: number) {
  try {
    const data: DataTable[] = Data;
    const dataById = data.find((item) => item.id === id);

    return dataById;
  } catch (error) {
    console.error(error);

    throw new Error('Failed to fetch data.');
  }
}
