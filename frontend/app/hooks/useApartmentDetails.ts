import { useState, useEffect } from 'react';
import axios from 'axios';
import { Apartment } from '../types';

export function useApartmentDetails(id: string | undefined) {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchApartment = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/apartments/${id}`);
        setApartment(response.data);
      } catch (err) {
        setError('Failed to fetch apartment details.');
        setApartment(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApartment();
  }, [id]);

  return { apartment, isLoading, error };
}
