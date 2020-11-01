import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Menu } from './components/menu/menu.component';
import { HomePage } from './components/home/home.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { SubtitlesComponent } from './components/subtitles/subtitles.component';
import { FaqComponent } from './components/faq/faq.component';
import { ErrorPage } from './components/error/error.component';
import { QuestionComponent } from './components/question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Menu,
    HomePage,
    OurWorkComponent,
    SubtitlesComponent,
    FaqComponent,
    ErrorPage,
    QuestionComponent,
    CarouselComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
