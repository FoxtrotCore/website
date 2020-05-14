import { Component, OnInit, Inject, Renderer2, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FtfApiService } from 'src/app/services/ftf-api.service';
import { AvailabilityForm } from 'src/app/models/AvailabilityForm'
import { episode_data } from 'src/assets/episode_data';

function sleep(delay: number) { return new Promise( resolve => setTimeout(resolve, delay) ); }

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.css']
})
export class SubtitlesComponent implements OnInit {
  available: AvailabilityForm;
  ep_data: Object[];
  table_loaded: Boolean;

  constructor(@Inject(AppComponent) private parent: AppComponent, private renderer: Renderer2, private api: FtfApiService) {
    this.table_loaded = false;
    this.available = new AvailabilityForm;
    this.ep_data = episode_data;
    this.parent.page_title = "Subtitles";
    this.parent.banner_title = "FTF Subtitles";
    this.parent.updatePage();
  }

  getEpisodeData(ep: Number) {
    return this.ep_data.find(e => e['number'] == ep);
  }

  enableSpinner() {
    var spinner = this.root.nativeElement.querySelector('app-spinner');
    var async_content = this.root.nativeElement.querySelector('.async-content');
    this.renderer.setStyle(spinner, 'display', 'inline');
    this.renderer.setStyle(async_content, 'display', 'none');
  }

  disableSpinner() {
    var spinner = this.root.nativeElement.querySelector('app-spinner');
    var async_content = this.root.nativeElement.querySelector('.async-content');
    this.renderer.setStyle(spinner, 'display', 'none');
    this.renderer.setStyle(async_content, 'display', 'inline');
  }

  async enableContent() {
    await sleep(200);
    this.disableSpinner();
    var downloadall_element = this.root.nativeElement.querySelector('#downloadall');
    downloadall_element.setAttribute('href', this.api.getScriptLink('all'));

    for(var i = 0; i < this.available.available_episodes.length; ++i){
      const ep = this.available.available_episodes[i];
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

      sub_element.setAttribute('href', this.api.getScriptLink(String(ep)));
    }
  }

  @ViewChild('root', { static: false }) root: { nativeElement: { querySelector: (arg0: string) => any; }; };

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.enableSpinner();

    this.api.getAvailable().subscribe(
    data => {
      this.enableContent(),
      this.available = data
    },
    error => {
      this.available = new AvailabilityForm,
      console.error("fatal: " + error)
    });
  }
}
