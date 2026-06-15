import mongoose, { Schema, Document, model, models } from 'mongoose';

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message?: string;
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  budget: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default models.Lead || model<ILead>('Lead', LeadSchema);
