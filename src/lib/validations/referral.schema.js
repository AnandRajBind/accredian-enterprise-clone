import { z } from 'zod';

export const referrerStep1Schema = z.object({
  referrerName: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),
  referrerEmail: z
    .string()
    .trim()
    .email('Please enter a valid work email address'),
  referrerPhone: z
    .string()
    .trim()
    .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, 'Please enter a valid phone number'),
});

export const refereeStep2Schema = z.object({
  refereeName: z
    .string()
    .trim()
    .min(2, 'Referee name must be at least 2 characters')
    .max(100, 'Referee name cannot exceed 100 characters'),
  refereeEmail: z
    .string()
    .trim()
    .email('Please enter a valid referee email address'),
  refereePhone: z
    .string()
    .trim()
    .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, 'Please enter a valid phone number'),
  programInterest: z
    .string()
    .trim()
    .min(1, 'Please select a program to recommend'),
});

export const completeReferralSchema = referrerStep1Schema.merge(refereeStep2Schema);
