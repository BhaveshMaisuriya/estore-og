import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // data: {
    //   seo: {
    //     title: 'Home Page | Dynamic Title and Meta Tags Demo',
    //     metaTags: [
    //       { name: 'description', content: 'Game of Thrones Quotes.' },
    //       { property: 'og:title', content: 'Hey Bhavesh! You have Done.. ⚔' },
    //       { proprety: 'og:description', content: 'Game of Thrones Quotes : Winter is Coming.' },
    //       { property: 'og:image', content: environment.appUrl + 'assets/image/homepage.png' },
    //       { property: 'og:url', content: environment.appUrl + 'home' },
    //       { name: "twitter:card", content: "summary_large_image" },
    //     ]
    //   }
    // }
  },
  {
    path: 'mega',
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule),
    // data: {
    //   seo: {
    //     title: 'GOT Characters 🧔',
    //     metaTags: [
    //       { name: 'description', content: 'List of all the characters from game of thrones' },
    //       { property: 'og:title', content: 'Hey Bhavesh ! 🧔' },
    //       { proprety: 'og:description', content: 'List of all the characters from game of thrones' },
    //       { property: 'og:image', content: environment.appUrl + 'assets/image/characters.png' },
    //       { property: 'og:url', content: environment.appUrl + 'characters' },
    //       { name: "twitter:card", content: "summary_large_image" },
    //     ]
    //   }
    // }
  },
  {
    path: 'xpax',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    // data: {
    //   seo: {
    //     title: 'GOT Books 📚',
    //     metaTags: [
    //       { name: 'description', content: 'List of all Game of Thrones books. A Game of Thrones, Clash of Kings, A Storm of Swords...' },
    //       { property: 'og:title', content: 'Game of Thrones Books 📕' },
    //       { proprety: 'og:description', content: 'List of all Game of Thrones books.' },
    //       { property: 'og:image', content: environment.appUrl + 'assets/image/books.png' },
    //       { property: 'og:url', content: environment.appUrl + 'books' },
    //       { name: "twitter:card", content: "summary_large_image" },
    //     ]
    //   }
    // }
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
  },
  //{ path: '**', redirectTo: 'home' },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
