import Apartment, { IApartment } from '../models/entity/Apartment';

export async function findApartments(query: any, skip: number, limit: number): Promise<IApartment[]> {
  return Apartment.find(query).skip(skip).limit(limit);
}

export async function countApartments(query: any): Promise<number> {
  return Apartment.countDocuments(query);
}

export async function findApartmentById(id: string): Promise<IApartment | null> {
  return Apartment.findById(id);
}

export async function createApartment(data: Partial<IApartment>): Promise<IApartment> {
  const apartment = new Apartment(data);
  await apartment.save();
  return apartment;
}
