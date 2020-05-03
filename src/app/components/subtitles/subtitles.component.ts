import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent implements OnInit {
  available: Object[];

  constructor(@Inject(AppComponent) private parent: AppComponent, private http: HttpClient) {
    this.parent.page_title = "Subtitles";
    this.parent.banner_title = "FTF Subtitles";
    this.parent.updatePage();

    (async () => {
      this.available = await this.getAvailable();
    })();
  }

  async getAvailable() {
    var res = await this.http.get('https://api.foxtrotfanatics.com/available', {});
    console.log(res);
    return [];
  }

  ngOnInit(): void {}
}
