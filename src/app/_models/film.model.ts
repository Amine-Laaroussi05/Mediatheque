import { Product } from "./product.model";

export interface Film extends Product{
  real: string;
  synopsis: string;
}
