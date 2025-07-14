import { INftCard } from "./INftCard";

export interface INfts {
    first: number,
    prev: number,
    next: number,
    last: number,
    pages: number,
    items: number,
    pending: boolean,
    data: INftCard[];
}