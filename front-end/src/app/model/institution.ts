import { Address } from "./address";
import { Campaign } from "./campaign";
import { Follow } from "./follow";
import { Trust } from "./trust";
import { User } from "./user";

export interface Institution {
  id: number;
  address: Address;
  user: User;
  cover_image: string;
  corporate_name: string;
  fantasy_name: string;
  cnpj: string;
  email: string;
  phone: string;
  linkMain: string;
  linkAlternate: string;
  resume: string;
  description: string;
  about: string;
  mission: string;
  vision: string;
  value: string;
  opening_date: String;
  campaigns: Campaign[];
  follows: Follow[];
  trusts: Trust[];
  pending: Boolean;
  active: Boolean;
}
