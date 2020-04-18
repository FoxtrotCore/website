import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) {
    this.parent.page_title = "Team Foxtrot";
    this.parent.banner_title = "The Foxtrot Fanatics";
    this.parent.updatePage();
  }

  ngOnInit(): void {}
}
