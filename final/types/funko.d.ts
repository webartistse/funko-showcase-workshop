import { ObjectId } from "mongodb";

export type Funko = {
  _id: ObjectId;
  source: string;
  source: string;
  character: string;
  numberInLine: number;
  imageUrl: string;
  yearReleased: number | string;
};
export interface FunkoProps {
  funkos: Funko[];
  setFunkos: setFunkos;
}
export interface EditFunkoProps {
  funko: Funko
}
