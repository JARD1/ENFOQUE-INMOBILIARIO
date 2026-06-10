export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // Metros cuadrados
  imageUrl: string;
  features: string[]; // Ej: ["Piscina", "Seguridad 24/7", "Vista al Ávila"]
}