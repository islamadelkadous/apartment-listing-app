import React from 'react';

interface ApartmentFormProps {
  formData: {
    unitName: string;
    unitNumber: string;
    project: string;
    address: string;
    price: string;
    bedrooms: string;
    bathrooms: string;
    description: string;
  };
  error?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ApartmentForm: React.FC<ApartmentFormProps> = ({ formData, error, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div>
      <label className="block text-gray-300 mb-1">Unit Name</label>
      <input type="text" name="unitName" value={formData.unitName} onChange={onChange} className="border-2 border-[#26A69A] rounded-lg p-3 w-full bg-[#23272F] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/50" required />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Unit Number</label>
      <input type="text" name="unitNumber" value={formData.unitNumber} onChange={onChange} className="border-2 border-[#26A69A] rounded-lg p-3 w-full bg-[#23272F] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/50" required />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Project</label>
      <input type="text" name="project" value={formData.project} onChange={onChange} className="border-2 border-[#26A69A] rounded-lg p-3 w-full bg-[#23272F] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/50" required />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Address</label>
      <input type="text" name="address" value={formData.address} onChange={onChange} className="border-2 border-[#26A69A] rounded-lg p-3 w-full bg-[#23272F] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/50" required />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Price</label>
      <input type="number" name="price" value={formData.price} onChange={onChange} className="border-2 border-[#26A69A] rounded-lg p-3 w-full bg-[#23272F] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/50" required min="0" />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Bedrooms</label>
      <input type="number" name="bedrooms" value={formData.bedrooms} onChange={onChange} className="border-2 border-[#26A69A] rounded-lg p-3 w-full bg-[#23272F] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/50" required min="0" />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Bathrooms</label>
      <input type="number" name="bathrooms" value={formData.bathrooms} onChange={onChange} className="border-2 border-[#26A69A] rounded-lg p-3 w-full bg-[#23272F] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/50" required min="0" />
    </div>
    <div>
      <label className="block text-gray-300 mb-1">Description</label>
      <textarea name="description" value={formData.description} onChange={onChange} className="border-2 border-[#26A69A] rounded-lg p-3 w-full bg-[#23272F] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/50" required />
    </div>
    {error && <div className="text-red-500 mb-4">{error}</div>}
    <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-[#26A69A] to-[#42A5F5] text-white rounded-lg shadow-md hover:shadow-lg hover:from-[#42A5F5] hover:to-[#26A69A] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#42A5F5]/50">Add Apartment</button>
  </form>
);

export default ApartmentForm;
