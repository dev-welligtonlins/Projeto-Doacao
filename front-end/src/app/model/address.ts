import { Administrator } from "./administrator";
import { Donor } from "./donor";
import { Institution } from "./institution";

export interface Address {
    id: number;
    administrators: Administrator[];
    institutions: Institution[];
    donors: Donor[];
    country: string;
    state: string;
    city: string;
    district: string;
    location: string;
    number: string;
    postalCode: string;
    active: boolean;
}
