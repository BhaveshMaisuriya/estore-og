import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export const BASE_URL = environment.apiUrl + '/rest/V1/seodata';
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
   debugger;
    metaTags.forEach( m => {
      if(m.property?.includes('og:image') || m.property?.includes('og:url')) 
        m.content =  environment.host + m.content ;
        this.meta.updateTag(m)
    });
  }

  seoMetaTagsApi(url: string) {
    console.log('Complete API URL:'+ BASE_URL + url);
    return this.http.get<any>(BASE_URL + url)
    .pipe(map((response) => response[0]));
      
  }
}
