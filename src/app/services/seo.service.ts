import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  urls = {
    seoMetaTags: `home`,
  };

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
    console.log('Current URL:'+ url);
    return this.http
      .get<any>(`${ environment.appUrl }${ url }`)
      .pipe(map((response) => response[0]));
  }
}
