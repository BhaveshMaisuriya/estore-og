import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ISeo } from '../models/book.model';

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
    this.http.get<ISeo[]>(BASE_URL + url)
    .pipe(map((response:ISeo[]) => response[0].seo))
    .subscribe((data) => {
        console.log(data);
        this.updateTitle(data.title);
        this.updateMetaTags(data.metaTags);
      });
  }
}
