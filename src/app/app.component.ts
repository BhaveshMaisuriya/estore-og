import { Component, OnDestroy } from '@angular/core';
import { SeoService } from './services/seo.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'got-prerender-demo';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService){

  }

  ngOnInit(): void {

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e=> this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      //mergeMap((route) => route.data),
    ).subscribe(() => {
      this.seoService.seoMetaTagsApi(this.router.url);
    });
    
  }

}
