import mongoose from 'mongoose';
import { ApartmentDto, ApartmentsResponseDto } from '../models/dto/ApartmentDto';
import { toApartmentDto } from '../models/mappers/apartmentMapper';
import {
  findApartments,
  countApartments,
  findApartmentById,
  createApartment,
} from '../repository/apartmentRepository';

export async function getApartmentsService(search: string | undefined, page: number, limit: number): Promise<ApartmentsResponseDto> {
  try {
    const skip = (page - 1) * limit;
    let query = {};
    if (search) {
      query = {
        $or: [
          { unitName: { $regex: search, $options: 'i' } },
          { unitNumber: { $regex: search, $options: 'i' } },
          { project: { $regex: search, $options: 'i' } },
        ],
      };
    }
    const [apartments, total] = await Promise.all([
      findApartments(query, skip, limit),
      countApartments(query),
    ]);
    return {
      apartments: apartments.map(toApartmentDto),
      total,
      page,
      limit,
    };
  } catch (error) {
    throw new Error('Failed to fetch apartments');
  }
}

export async function getApartmentByIdService(id: string): Promise<ApartmentDto | null> {
  try {
    // Check if id is a valid ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Apartment not found');
    }
    const apartment = await findApartmentById(id);
    if (!apartment) {
      throw new Error('Apartment not found');
    }
    return toApartmentDto(apartment);
  } catch (error) {
    throw new Error('Apartment not found');
  }
}

export async function addApartmentService(data: any): Promise<ApartmentDto> {
  try {
    const apartment = await createApartment(data);
    return toApartmentDto(apartment);
  } catch (error) {
    throw new Error('Failed to add apartment');
  }
}
