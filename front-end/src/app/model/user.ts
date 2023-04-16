import { Administrator } from "./administrator";
import { Donor } from "./donor";
import { Enjoy } from "./enjoy";
import { Follow } from "./follow";
import { Institution } from "./institution";
import { Trust } from "./trust";

export interface User {
  id: number;
  administrators: Administrator[];
  institutions: Institution[];
  donors: Donor[];
  follows: Follow[];
  enjoys: Enjoy[];
  trusts: Trust[];
  username: string;
  password: string;
  role: string;
  active: boolean;

}
