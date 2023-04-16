import {Institution} from "./institution";
import { User } from "./user";

export interface Trust {
  id: number;
  institution: Institution;
  user: User;
}
