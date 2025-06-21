'use client';
import { useAddApartment } from '../hooks/useAddApartment';
import AppButton from '../components/AppButton';
import SectionTitle from '../components/SectionTitle';
import ApartmentForm from '../components/ApartmentForm';

export default function AddApartment() {
  const { formData, setFormData, error, handleInputChange, handleSubmit } = useAddApartment();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#23272F] via-[#23272F] to-[#23272F] flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <AppButton to="/" className="mb-6">
          &larr; Back to Listings
        </AppButton>
        <div className="bg-gradient-to-br from-[#23272F] to-[#B0BEC5]/10 p-8 rounded-2xl shadow-lg border border-[#26A69A]/20">
          <SectionTitle className="text-3xl mb-6">Add Apartment</SectionTitle>
          <ApartmentForm
            formData={formData}
            error={error}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}