import { Address } from "./address";
import { User } from "./user";

export interface Administrator {
    id: number;
    address: Address;
    user: User;
    cover_image: string;
    fullName: string;
    email: string;
    active: boolean;
}
