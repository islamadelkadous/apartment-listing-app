import { Request, Response } from 'express';
import { getApartmentsService, getApartmentByIdService, addApartmentService } from '../service/apartmentService';

// Get all apartments API with optional search functionality for unitName, unitNumber, or project
export const getApartments = async (req: Request, res: Response): Promise<void> => {
  // All error handling is done in the service layer or by global error middleware
  const { search, page = '1', limit = '10' } = req.query;
  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const response = await getApartmentsService(search as string | undefined, pageNum, limitNum);
  res.json(response);
};

// Get a single apartment by ID API
export const getApartmentById = async (req: Request, res: Response): Promise<void> => {
  const apartmentDto = await getApartmentByIdService(req.params.id);
  res.json(apartmentDto);
};

// Add a new apartment API
export const addApartment = async (req: Request, res: Response): Promise<void> => {
  const apartmentDto = await addApartmentService(req.body);
  res.status(200).json(apartmentDto);
};