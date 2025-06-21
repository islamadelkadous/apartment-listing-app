import { useState, useEffect } from 'react';
import axios from 'axios';
import { Apartment, ApiResponse } from '../types';

interface UseApartmentsOptions {
  page: number;
  limit: number;
  search: string;
}

export function useApartments({ page, limit, search }: UseApartmentsOptions) {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApartments = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/apartments`, {
          params: { page, limit, search },
        });
        setApartments(response.data.apartments);
        setTotal(response.data.total);
      } catch (error) {
        setApartments([]);
        setTotal(0);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApartments();
  }, [page, limit, search]);

  return { apartments, total, isLoading };
}
