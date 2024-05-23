import { z } from 'zod';

export interface TORDERS {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

export const ZodOrderSchema = z.object({
  email: z.string(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number()
});
