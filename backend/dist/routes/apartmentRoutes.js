"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apartmentController_1 = require("../controllers/apartmentController");
const router = (0, express_1.Router)();
router.get('/', apartmentController_1.getApartments);
router.get('/:id', apartmentController_1.getApartmentById);
router.post('/', apartmentController_1.addApartment);
exports.default = router;
