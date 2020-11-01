import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { GcsService } from 'src/app/services/gcs.service';
// import { manifest } from 'src/assets/carousel_manifest';
import { common } from 'src/environments/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: String[];
  position: number;
  loaded: number;

  constructor(private renderer: Renderer2, private gcs: GcsService) {
    this.loaded = 0;
    this.position = 1;
    this.images = [];

    console.log('Out: ' + JSON.stringify(gcs.getImagesList()));

    for(var i = 0; i < 32; ++i) {
      this.images.push(common.carousel_imgs + gcs.num_to_img(i));
    }
  }
  @ViewChild('parent', { static: false }) parent: { nativeElement: { querySelector: (arg0: string) => any; }; };
  ngOnInit(): void {}

  ngAfterViewInit(): void { this.disableCarousel(); }

  checkLoaded() {
    this.loaded += 1;

    if(this.loaded == this.images.length){
      console.log("Imgaes loaded: " + this.loaded);
      this.enableCarousel();
    }
  }

  enableCarousel(){
    var first_img = this.parent.nativeElement.querySelector('img:nth-of-type(1)');
    var spinner = this.parent.nativeElement.querySelector('app-spinner');
    var left = this.parent.nativeElement.querySelector('#left');
    var right = this.parent.nativeElement.querySelector('#right');
    this.renderer.setStyle(spinner, 'display', 'none');
    this.renderer.setStyle(first_img, 'display', 'inline');
    left.removeAttribute('disabled');
    right.removeAttribute('disabled');
  }

  disableCarousel(){
    var first_img = this.parent.nativeElement.querySelector('img:nth-of-type(1)');
    var spinner = this.parent.nativeElement.querySelector('app-spinner');
    var left = this.parent.nativeElement.querySelector('#left');
    var right = this.parent.nativeElement.querySelector('#right');
    this.renderer.setStyle(spinner, 'display', 'inline');
    this.renderer.setStyle(first_img, 'display', 'none');
    left.setAttribute('disabled', '');
    right.setAttribute('disabled', '');
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
