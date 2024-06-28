import { Detail } from "./detail.interface";

export class GetNews {
    name!: string;
    status!: number;
    featured_post!: [];
    posts!: Detail[];
}