import { IApartment } from '../entity/Apartment';
import { ApartmentDto } from '../dto/ApartmentDto';

export function toApartmentDto(apartment: IApartment): ApartmentDto {
  return {
    id: apartment._id?.toString?.() || String(apartment._id),
    unitName: apartment.unitName,
    unitNumber: apartment.unitNumber,
    project: apartment.project,
    address: apartment.address,
    price: apartment.price,
    bedrooms: apartment.bedrooms,
    bathrooms: apartment.bathrooms,
    description: apartment.description,
  };
}
