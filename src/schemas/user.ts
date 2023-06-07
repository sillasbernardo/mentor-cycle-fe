import { availabilitySchema } from "schemas/availability";
import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().nullable(),
  active: z.boolean().nullable(),
  firstName: z.string(),
  lastName: z.string().nullable(),
  photoUrl: z.string().url().nullable(),
  yearsOfExperience: z.number().nullable(),
  isEmailVerified: z.boolean(),
  isTermsAccepted: z.boolean(),
  onBoardingCompleted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  googleId: z.string().nullable(),
  facebookId: z.string().nullable(),
  birthDate: z.date(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  skills: z.array(z.string()).nullable(),
  linkedin: z.string().url().nullable(),
  github: z.string().url().nullable(),
  website: z.string().url().nullable(),
  jobTitle: z.string().nullable(),
  jobCompany: z.string().url().nullable(),
  biography: z.string().nullable(),
  description: z.string().nullable(),
  isMentor: z.boolean().nullable(),
  status: z.string().nullable(),
  availability: z.array(availabilitySchema).nullable(),
});