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
export class AppComponent implements OnDestroy{
  title = 'got-prerender-demo';
  seoApiSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService){

  }
  ngOnDestroy(): void {
  // this.seoApiSubscription.unsubscribe();
  }

  ngOnInit(): void {
    // ? Adding OG Meta tags fetched from back-end
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e=> this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      //mergeMap((route) => route.data),
    ).subscribe(data => {
      this.seoService.seoMetaTagsApi(this.router.url)
      .subscribe((response) => {
        console.error(response);
        let seoData = response['seo'];
        this.seoService.updateTitle(seoData['title']);
        this.seoService.updateMetaTags(seoData['metaTags']);
      });
    });
    
  }

}
