import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FaqQuestion } from 'src/app/models/FaqQuestion';
import { raw_questions } from 'src/assets/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit {
  questions: FaqQuestion[];

  constructor(@Inject(AppComponent) private parent: AppComponent) {
    this.questions = raw_questions;
    this.parent.page_title = "FAQ";
    this.parent.banner_title = "Frequently Asked Questions";
    this.parent.updatePage();
  }

  ngOnInit(): void {}
}
