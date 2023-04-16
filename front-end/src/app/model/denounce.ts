import { User } from "./user";
import { Campaign } from "./campaign";

export interface Denounce {
  id: number;
  user: User;
  campaign: Campaign;
  title: string;
  message: string;
  date: string;
  accept: boolean;
  active: boolean;
}
