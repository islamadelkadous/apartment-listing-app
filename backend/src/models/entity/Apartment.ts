import mongoose, { Schema, Document } from 'mongoose';
import { Types } from 'mongoose';

// This file defines the schema and model for an Apartment in a MongoDB database using Mongoose.
export interface IApartment extends Document {
  _id: Types.ObjectId;
  unitName: string;
  unitNumber: string;
  project: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
}

// Define the schema for the Apartment model
const ApartmentSchema: Schema = new Schema({
  unitName: { type: String, required: true },
  unitNumber: { type: String, required: true, unique: true, index: true },
  project: { type: String, required: true, index: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IApartment>('Apartment', ApartmentSchema);