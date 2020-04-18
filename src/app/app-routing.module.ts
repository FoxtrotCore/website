import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { FaqComponent } from './components/faq/faq.component';
import { SubtitlesComponent } from './components/subtitles/subtitles.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'our-work', component: OurWorkComponent, data: { state: 'our-work' }  },
  { path: 'faq', component: FaqComponent, data: { state: 'faq' }  },
  { path: 'subtitles', component: SubtitlesComponent, data: { state: 'subtitles' }  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
