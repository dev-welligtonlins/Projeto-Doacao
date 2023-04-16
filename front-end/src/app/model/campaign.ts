import { Item } from "./item";
import {Enjoy} from "./enjoy";
import { Institution } from "./institution";

export interface Campaign {
    id: number;
    institution: Institution;
    cover_image: string;
    category: string;
    title: string;
    resume: string;
    description: string;
    result: string;
    status: string;
    active: boolean;
    item: Item[];
    enjoys: Enjoy[];
}
