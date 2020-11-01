import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { common } from 'src/environments/common';


@Injectable({
  providedIn: 'root'
})

export class GcsService {
  storage: Storage;
  // options: GetSignedUrlConfig;

  constructor(private http: HttpClient){}

  public num_to_img(img_num: Number): String {
  	return String(img_num).padStart(3, '0') + '-cl.png';
  }

  getImagesList() {
    return this.http.get(common.carousel_imgs, {observe: 'body'});
  }
}
