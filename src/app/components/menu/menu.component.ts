import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/Entry'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  entries: Entry[];

  constructor() { }

  ngOnInit(): void {
    this.entries = [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'About Us',
        url: '/about-us'
      },
      {
        name: 'Subtitles',
        url: '/subtitles'
      },
      {
        name: 'FAQ',
        url: '/faq'
      },
    ]
  }

}
