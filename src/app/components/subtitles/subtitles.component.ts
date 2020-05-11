import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FtfApiService } from 'src/app/services/ftf-api.service';
import { AvailabilityForm } from 'src/app/models/AvailabilityForm'
import { episode_data } from 'src/assets/episode_data';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent implements OnInit {
  available: AvailabilityForm;
  ep_data: Object[];

  constructor(@Inject(AppComponent) private parent: AppComponent, private api: FtfApiService) {
    this.ep_data = episode_data;
    this.parent.page_title = "Subtitles";
    this.parent.banner_title = "FTF Subtitles";
    this.parent.updatePage();

    this.api.getAvailable().subscribe(data => {this.available = data});
  }

  getEpisodeData(ep: Number) {
    return this.ep_data.find(e => e['number'] == ep);
  }

  @ViewChild('root', { static: false }) root: { nativeElement: { querySelector: (arg0: string) => any; }; };
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    var downloadall_element = this.root.nativeElement.querySelector('#downloadall');
    downloadall_element.setAttribute('href', this.api.getScriptLink('all'));

    for(var ep in this.available.available_episodes){
      const root_selector = '#entry-' + ep;
      var title_element = this.root.nativeElement.querySelector(root_selector + '> td:nth-child(2)');
      var us_element = this.root.nativeElement.querySelector(root_selector + '> td:nth-child(3)');
      var fr_element = this.root.nativeElement.querySelector(root_selector + '> td:nth-child(4)');
      var prod_element = this.root.nativeElement.querySelector(root_selector + '> td:nth-child(5)');
      var sub_element = this.root.nativeElement.querySelector(root_selector + '> td:nth-child(6) > a');
      var data = this.getEpisodeData(new Number(ep));

      title_element.innerText = data['eng_name'];
      us_element.innerText = data['us_airdate'];
      fr_element.innerText = data['fr_airdate'];
      prod_element.innerText = data['prod_code'];
      sub_element.setAttribute('href', this.api.getScriptLink(ep));
    }
  }
}
