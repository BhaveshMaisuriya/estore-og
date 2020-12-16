import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpMockRequestInterceptor } from "./http-mock.interceptor.service";

//import {BrowserStateInterceptor } from './browserstate.interceptor';

export const httpInterceptorProviders = [
    /**
     * Use Mock Interceptor request only for development
     * Please comment back before committing
     */
    // { provide: HTTP_INTERCEPTORS, useClass: HttpMockRequestInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: BrowserStateInterceptor, multi: true },
];
