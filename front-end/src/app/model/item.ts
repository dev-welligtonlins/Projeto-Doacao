import {Campaign} from "./campaign";

export interface Item {
    id: number;
    campaign: Campaign;
    item_name: string;
    type: string;
    current_value: number;
    required_value: number;
    item_description: string;
}
