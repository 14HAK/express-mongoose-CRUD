import { OBJECTID } from '../../utils/module.global.interface';
import { z } from 'zod';

export interface TORDERS {
  email: string;
  productID: OBJECTID;
  price: number;
  quantity: number;
}

export const ZodOrderSchema = z.object({
  email: z.string(),
  productID: z.string(),
  price: z.number(),
  quantity: z.number()
});
