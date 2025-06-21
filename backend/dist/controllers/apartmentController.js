"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addApartment = exports.getApartmentById = exports.getApartments = void 0;
const Apartment_1 = __importDefault(require("../models/Apartment"));
// Get all apartments (with search functionality)
const getApartments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.query;
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
        const apartments = yield Apartment_1.default.find(query);
        res.json(apartments);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
        next(error); // Pass the error to Express's error-handling middleware
    }
});
exports.getApartments = getApartments;
// Get a single apartment by ID
const getApartmentById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartment = yield Apartment_1.default.findById(req.params.id);
        if (!apartment) {
            res.status(404).json({ message: 'Apartment not found' });
            return;
        }
        res.json(apartment);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
        next(error); // Pass the error to Express's error-handling middleware
    }
});
exports.getApartmentById = getApartmentById;
// Add a new apartment
const addApartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartment = new Apartment_1.default(req.body);
        yield apartment.save();
        res.status(201).json(apartment);
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid data' });
        next(error); // Pass the error to Express's error-handling middleware
    }
});
exports.addApartment = addApartment;
