export interface ApartmentDto {
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

export interface ApartmentsResponseDto {
  apartments: ApartmentDto[];
  total: number;
  page: number;
  limit: number;
}

export interface GetApartmentsServiceResponseDto {
  apartments: ApartmentDto[];
  total: number;
  page: number;
  limit: number;
}
