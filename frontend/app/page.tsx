'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { useApartments } from './hooks/useApartments';
import SectionTitle from './components/SectionTitle';
import SearchBar from './components/SearchBar';
import ApartmentCard from './components/ApartmentCard';
import Pagination from './components/Pagination';
import AppButton from './components/AppButton';

function ApartmentList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read params from URL
  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const limitParam = parseInt(searchParams.get('limit') || '6', 10);
  const searchParam = searchParams.get('search') || '';

  const [page, setPage] = useState(pageParam);
  const [limit, setLimit] = useState(limitParam);
  const [search, setSearch] = useState(searchParam);
  const [inputValue, setInputValue] = useState(searchParam); // For controlled input

  // Sync state with URL params (only when params change)
  useEffect(() => {
    setPage(pageParam);
    setLimit(limitParam);
    setSearch(searchParam);
    setInputValue(searchParam);
  }, [pageParam, limitParam, searchParam]);

  // Use custom hook for fetching apartments
  const { apartments, total, isLoading } = useApartments({ page, limit, search });

  // Pagination logic
  const totalPages = Math.ceil(total / limit);

  // Handlers
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?page=1&limit=${limit}&search=${encodeURIComponent(inputValue)}`);
  };

  const handlePageChange = (newPage: number) => {
    router.push(`/?page=${newPage}&limit=${limit}&search=${encodeURIComponent(search)}`);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/?page=1&limit=${e.target.value}&search=${encodeURIComponent(search)}`);
  };

  const handleAddApartment = () => {
    router.push('/add');
  };

  const handleApartmentClick = (id: string) => {
    router.push(`/apartments/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#23272F] via-[#23272F] to-[#23272F] py-8 flex flex-col items-center text-gray-200">
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-between items-center mb-10">
          <SectionTitle>Apartment Listings</SectionTitle>
          <AppButton onClick={handleAddApartment} className="ml-4 px-6 py-3">
            Add Apartment
          </AppButton>
        </div>
        <SearchBar
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={handleSearch}
          limit={limit}
          onLimitChange={handleLimitChange}
        />
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-gray-400 text-sm">
            Showing <span className="font-semibold">{apartments.length}</span> of <span className="font-semibold">{total}</span> apartments
          </span>
          <span className="text-gray-400 text-sm">
            Page <span className="font-semibold">{page}</span> of <span className="font-semibold">{totalPages || 1}</span>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} onClick={handleApartmentClick} />
          ))}
        </div>
        {apartments.length === 0 && !isLoading && (
          <p className="text-center text-xl text-gray-400 mt-10">No apartments found.</p>
        )}
        {isLoading && (
          <div className="text-center mt-8">
            <span className="text-[#42A5F5] font-semibold animate-pulse">Loading apartments...</span>
          </div>
        )}
        <Pagination
          page={page}
          totalPages={totalPages}
          isLoading={isLoading}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

// Default export with Suspense boundary
export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-20 text-gray-400">Loading apartment listings...</div>}>
      <ApartmentList />
    </Suspense>
  );
}