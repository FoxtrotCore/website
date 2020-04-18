import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) {
    this.parent.page_title = "FAQ";
    this.parent.banner_title = "Frequently Asked Questions";
    this.parent.updatePage();
  }

  ngOnInit(): void {}
}
