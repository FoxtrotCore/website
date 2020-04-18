import { Component, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  icon_size: string;
  page_title: string;
  banner_title: string;

  constructor(private renderer: Renderer2, private titleService: Title) {
    this.icon_size = '20vh';
    this.page_title = 'Team Foxtrot';
    this.banner_title = 'The Foxtrot Fanatics';

    this.updatePage();
  }

  @ViewChild('parent', { static: false }) parent;
  ngAfterViewInit() {
    this.setStyle('#logo', 'background-size', this.icon_size);
    this.setStyle('#logo', 'width', this.icon_size);
    this.setStyle('#logo', 'height', this.icon_size);
  }

  updatePage() {
    this.titleService.setTitle(this.page_title);
  }

  setStyle(element, style, value): void {
    this.renderer.setStyle(this.parent.nativeElement.querySelector(element), style, value);
  }
}
