import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export const BASE_URL = environment.Host + '/rest/V1/seodata';
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
    metaTags.forEach( m => {
      //if(m.property?.includes('og:image') || m.property?.includes('og:url')) 
      //{ m.content = environment.host + m.content; }
      this.meta.updateTag(m);
    });
  }

  seoMetaTagsApi(url: string): any {
    this.http.get(BASE_URL + url)
    .pipe(map((response) => response[0]))
    .subscribe(data => {
        console.log(data);
        let seoData = data['seo'];
        this.updateTitle(seoData['title']);
        this.updateMetaTags(seoData['metaTags']);
      });
  }
}
