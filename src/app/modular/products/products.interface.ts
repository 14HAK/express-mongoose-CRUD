import { z } from 'zod';

interface TPRODUCTVARIANTS {
  type: string;
  value: string;
}

interface TPRODUCTINVENTORY {
  quantity: number;
  inStock: boolean;
}

export default interface TPRODUCT {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: TPRODUCTVARIANTS[];
  inventory: TPRODUCTINVENTORY;
}

const ZodVariant = z.array(
  z.object({
    type: z.string(),
    value: z.string()
  })
);

const ZodInventory = z.object({
  quantity: z.number(),
  inStock: z.boolean()
});

export const ZodProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: ZodVariant,
  inventory: ZodInventory
});
