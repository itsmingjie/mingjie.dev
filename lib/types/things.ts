import type { ITag } from "./tags";

export interface IThing {
  id: string;
  name: string;
  description?: string;
  image?: string;
  link?: string;

  /** foreign fields */
  tags?: ITag[];
}
