import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FtfApiService } from 'src/app/services/ftf-api.service';
import { AvailabilityForm } from 'src/app/models/AvailabilityForm'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent implements OnInit {
  available: AvailabilityForm;

  constructor(@Inject(AppComponent) private parent: AppComponent, private api: FtfApiService) {
    this.parent.page_title = "Subtitles";
    this.parent.banner_title = "FTF Subtitles";
    this.parent.updatePage();

    this.api.getAvailable().subscribe(data => {this.available = data});
  }

  ngOnInit(): void {}
}
