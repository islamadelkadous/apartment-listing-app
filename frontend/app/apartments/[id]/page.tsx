'use client';

import { useParams } from 'next/navigation';
import { useApartmentDetails } from '../../hooks/useApartmentDetails';
import AppButton from '../../components/AppButton';
import ApartmentCard from '../../components/ApartmentCard';

export default function ApartmentDetails() {
  const { id } = useParams();
  const { apartment, isLoading, error } = useApartmentDetails(typeof id === 'string' ? id : Array.isArray(id) ? id[0] : undefined);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#23272F] text-[#42A5F5] text-xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#23272F] text-red-500 text-xl">
        {error}
      </div>
    );
  if (!apartment) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#23272F] via-[#23272F] to-[#23272F] flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <AppButton to="/" className="mb-6">
          &larr; Back to Listings
        </AppButton>
        <ApartmentCard apartment={apartment} disableNavigation showDescription />
      </div>
    </div>
  );
}