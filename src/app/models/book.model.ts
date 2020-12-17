import { MetaDefinition } from '@angular/platform-browser';

export interface Book{
    name: string;
    isbn: string;
    authors: string[];
    publisher: string[];
    country: string;
    mediaType: string;
    released: string;
}

export interface ISeo {
    seo:IMetaTags;
}
export interface IMetaTags {
    metaTags: MetaDefinition[];
    title?:string;
}