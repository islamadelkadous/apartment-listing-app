import { Router } from 'express';
import { getApartments, getApartmentById, addApartment } from '../controllers/apartmentController';

const router = Router();

// Define routes for apartments controller
router.get('/', getApartments);
router.get('/:id', getApartmentById);
router.post('/', addApartment);

export default router;