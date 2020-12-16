import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';


@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject('serverUrl') protected serverUrl: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Server Intercepted...');
    const serverReq = !this.serverUrl ? req : req.clone({
      setHeaders: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
      },
      url: `${this.serverUrl}${req.url}`
    });
    return next.handle(serverReq);
  }

}
