import { Address } from "./address";
import { User } from "./user";

export interface Donor {
    id: number;
    address: Address;
    user: User;
    cover_image: string;
    fullName: string;
    cpf: string;
    email: string;
    gender: string;
    birthDate: Date;
    active: Boolean;
}