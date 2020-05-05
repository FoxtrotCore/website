import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { manifest } from 'src/assets/carousel_manifest';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: String[];
  position: number;

  constructor(private renderer: Renderer2) {
    this.position = 1;
    this.images = manifest;
  }
  @ViewChild('parent', { static: false }) parent: { nativeElement: { querySelector: (arg0: string) => any; }; };
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.swap(this.position, this.position);
  }

  slideLeft(): void {
    const load_out = this.position;
    this.position -= 1;
    if(this.position < 1) this.position = this.images.length;
    this.swap(load_out, this.position);
  }

  slideRight(): void {
    const load_out = this.position;
    this.position += 1;
    if(this.position > this.images.length) this.position = 1;
    this.swap(load_out, this.position);
  }

  swap(load_out_index, load_in_index): void {
    var load_out = this.parent.nativeElement.querySelector('img:nth-of-type(' + load_out_index + ')');
    var load_in = this.parent.nativeElement.querySelector('img:nth-of-type(' + load_in_index + ')');
    this.renderer.setStyle(load_out, 'display', 'none');
    this.renderer.setStyle(load_in, 'display', 'inline');
  }
}
