export interface Room {
  id?: number;
  number: string;
  type: string;
  price?: number | null;
  available: boolean;
  imageUrl: string;
}
