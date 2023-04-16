import {Campaign} from "./campaign";
import { User } from "./user";

export interface Enjoy {
  id: number;
  campaign: Campaign;
  user: User;
}
