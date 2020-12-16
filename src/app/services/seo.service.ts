import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

export const BASE_URL = 'https://estorecms-04.celcom.com.my/rest/V1/seodata';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title, 
    private meta: Meta,
    private http: HttpClient) { }

  updateTitle(title: string){
    this.title.setTitle(title);
  }

  updateMetaTags(metaTags: MetaDefinition[]){
    metaTags.forEach(m=> this.meta.updateTag(m));
  }

  seoMetaTagsApi(url: string) {
    console.log('Complete API URL:'+ BASE_URL + url);
    return this.http.get<any>(BASE_URL + url)
    .pipe(map((response) => response[0]));
      
  }
}
