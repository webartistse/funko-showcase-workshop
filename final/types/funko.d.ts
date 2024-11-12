export type Funko = {
  _id: string;
  movie_tv_show: string;
  character: string;
  number: number;
  image: string;
};

export interface FunkoProps {
  funkos: Funko[];
}
