import { Card } from "./card.interface";

export interface User {
    _id: string;
    name: string;
    card: Card;
    email: string;
    password: string;
    source: string;
    phone: string;
    company: string;
    token: string;
}