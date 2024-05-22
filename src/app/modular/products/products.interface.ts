interface TPRODUCTVARIANTS {
  type: string;
  value: string;
}

interface TPRODUCTINVENTORY {
  quantity: number;
  inStock: boolean;
}

interface TPRODUCT {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: [TPRODUCTVARIANTS];
  inventory: TPRODUCTINVENTORY;
}

export default TPRODUCT;
