export type Funko = {
  _id: string;
  movie_tv_show: string;
  character: string;
  number: number;
  image: string;
  year_release: number | string;
};
export interface FunkoProps {
  funkos: Funko[];
}
export interface EditFunkoProps {
  funko: Funko
}
