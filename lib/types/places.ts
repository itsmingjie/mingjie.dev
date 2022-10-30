import type { ITag } from "./tags";

export interface IPlace {
  id: string;
  name: string;
  address?: string;

  /** foreign fields */
  tags?: ITag[];
}
