import mongoose from 'mongoose';

const personSchema = new mongoose.Schema(
  {
    first: { type: String, required: true, trim: true },
    last: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
    avatar: { type: String, trim: true } // image url from API
  },
  { timestamps: true }
);

// Useful for sorting + pagination
personSchema.index({ last: 1, first: 1 });

export default mongoose.model('Person', personSchema);
