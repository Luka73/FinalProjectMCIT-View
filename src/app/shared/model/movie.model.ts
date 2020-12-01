import { SafeResourceUrl } from '@angular/platform-browser';

export class Movie {
    id: number;
    name: string;
    price: number;
    category: string;
    trailer: string;
    urlSafe: SafeResourceUrl;
}