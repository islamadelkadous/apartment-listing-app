import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export function useAddApartment() {
  const [formData, setFormData] = useState({
    unitName: '',
    unitNumber: '',
    project: '',
    address: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/apartments`, {
        ...formData,
        price: Number(formData.price),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
      });
      router.push('/');
    } catch (err) {
      setError('Failed to add apartment. Please try again or check the server.');
      console.error('Error adding apartment:', err);
    }
  };

  return {
    formData,
    setFormData,
    error,
    handleInputChange,
    handleSubmit,
  };
}
