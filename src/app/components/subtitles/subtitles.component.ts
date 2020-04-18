import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent implements OnInit {

  constructor(@Inject(AppComponent) private parent: AppComponent) {
    this.parent.page_title = "Subtitles";
    this.parent.banner_title = "FTF Subtitles";
    this.parent.updatePage();
  }

  ngOnInit(): void {}
}
