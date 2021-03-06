import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/Entry'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class Menu implements OnInit {
  entries: Entry[];

  constructor() { }

  ngOnInit(): void {
    this.entries = [
      {
        name: 'Home',
        url: '/home'
      },
      {
        name: 'Our Work',
        url: '/our-work'
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
