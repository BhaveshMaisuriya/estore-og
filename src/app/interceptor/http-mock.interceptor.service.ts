import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import * as seoMetaTagsHome from '../json/seoMetaTagsHome.json';
import * as seoMetaTagsBooks from '../json/seoMetaTagsBooks.json';
import * as seoMetaTagsMega from '../json/seoMetaTagsMega.json';
import * as seoMetaTagsCharacters from '../json/seoMetaTagsCharacters.json';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BASE_URL } from '../services/seo.service';

const urls = [
    // {
    //     url: `${BASE_URL}/home`,
    //     json: seoMetaTagsHome
    // },
    {
        url: `${BASE_URL}/books`,
        json: seoMetaTagsBooks
    },
    // {
    //     url: `${BASE_URL}/mega`,
    //     json: seoMetaTagsMega
    // },
    // {
    //     url: `${BASE_URL}/xpax`,
    //     json: seoMetaTagsCharacters
    // },
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const req = request.clone({
            setHeaders: {
              'Cache-Control': 'no-cache',
              Pragma: 'no-cache'
            }
          });
        const resp = urls.find(el => el.url == request.urlWithParams);
        if (resp) {
            console.info('Intercepted inside:', request.urlWithParams);
            return of(new HttpResponse({ status: 200, body: (resp?.json['default'] || resp?.json) }))
                .pipe(delay(+resp['delay'] || 0));
        }
        return next.handle(req);
    }
}
