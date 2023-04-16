import {Institution} from "./institution";
import { User } from "./user";
export interface Follow {
  id: number;
  institution: Institution;
  user: User;
}
