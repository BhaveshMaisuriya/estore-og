import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import * as seoMetaTagsHome from '../json/seoMetaTagsHome.json';
import * as seoMetaTagsBooks from '../json/seoMetaTagsBooks.json';
import * as seoMetaTagsMega from '../json/seoMetaTagsMega.json';
import * as seoMetaTagsCharacters from '../json/seoMetaTagsCharacters.json';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

//const estore_domain = 'https://celcom.heroku.com';
const estore_domain = 'http://localhost:4000';
const urls = [
    {
        url: `${estore_domain}/home`,
        json: seoMetaTagsHome
    },
    {
        url: `${estore_domain}/books`,
        json: seoMetaTagsBooks
    },
    {
        url: `${estore_domain}/plans/mega`,
        json: seoMetaTagsMega
    },
    {
        url: `${estore_domain}/characters`,
        json: seoMetaTagsCharacters
    },
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const resp = urls.find(el => el.url == request.urlWithParams);
        console.info('Intercepted', resp);
        if (resp) {
            console.info('Intercepted', request.urlWithParams);
            return of(new HttpResponse({ status: 200, body: (resp.json['default'] || resp.json) }))
                .pipe(delay(+resp['delay'] || 0));
        }
        return next.handle(request);
    }
}
