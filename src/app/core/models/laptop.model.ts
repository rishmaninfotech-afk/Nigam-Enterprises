export interface Laptop {
  id: string;
  brand: string;
  model: string;
  price: number;
  processor: string;
  ram: string;
  storage: string;
  condition: 'good' | 'excellent' | 'refurbished';
  image: string;
  specifications?: string;
  warranty?: string;
  inStock: boolean;
}
