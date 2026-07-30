import { z } from 'zod';

export const enquireSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name cannot exceed 100 characters'),
  workEmail: z
    .string()
    .trim()
    .email('Please enter a valid work email address'),
  companyName: z
    .string()
    .trim()
    .min(2, 'Company name is required'),
  teamSize: z
    .string()
    .trim()
    .min(1, 'Please select your team size'),
  programInterest: z
    .string()
    .trim()
    .min(1, 'Please select a program of interest'),
  message: z
    .string()
    .trim()
    .max(1000, 'Message cannot exceed 1000 characters')
    .optional(),
});
