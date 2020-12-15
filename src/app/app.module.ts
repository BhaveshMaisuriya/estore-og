import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { AppComponent } from './app.component';
import { SeoService } from './services/seo.service';
import { httpInterceptorProviders } from './interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    BrowserTransferStateModule,
    TransferHttpCacheModule,
  ],
  providers: [
    SeoService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
