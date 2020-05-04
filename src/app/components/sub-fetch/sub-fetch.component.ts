import { Component, OnInit, Input } from '@angular/core';
import { FtfApiService } from 'src/app/services/ftf-api.service';

@Component({
  selector: 'app-sub-fetch',
  templateUrl: './sub-fetch.component.html',
  styleUrls: ['./sub-fetch.component.css']
})
export class SubFetchComponent implements OnInit {
  @Input() ep: Number;
  @Input() available: String;
  url: String;

  constructor(private api: FtfApiService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    if(this.available == "true") this.url = this.api.getDownloadLink(this.ep);
    else this.url = '/subtitles';
  }
}
