export interface Apartment {
  id: string;
  unitName: string;
  unitNumber: string;
  project: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
}

export interface ApiResponse {
  apartments: Apartment[];
  total: number;
  page: number;
  limit: number;
}