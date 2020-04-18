import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) {
    this.parent.page_title = "About Us";
    this.parent.banner_title = "What We've Done";
    this.parent.updatePage();
  }

  ngOnInit(): void {}
}
