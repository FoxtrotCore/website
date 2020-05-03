import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FtfApiService } from '../../services/ftf-api.service';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent implements OnInit {
  available: any;

  constructor(@Inject(AppComponent) private parent: AppComponent, private api: FtfApiService) {
    this.parent.page_title = "Subtitles";
    this.parent.banner_title = "FTF Subtitles";
    this.parent.updatePage();

    this.api.getAvailable().subscribe(
      data => {
        console.log("Got data: " + JSON.stringify(data))
      },
      error => console.error(JSON.stringify(error))
    );
  }

  ngOnInit(): void {}
}
