import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { AvailabilityForm } from 'src/app/models/AvailabilityForm';

@Injectable({
  providedIn: 'root'
})
export class FtfApiService {
  readonly base_url = "https://api.foxtrotfanatics.com";

  constructor(private http: HttpClient) {}

  getAvailable(): Observable<AvailabilityForm> {
    const uri = '/available';
    return this.http.get<AvailabilityForm>(this.base_url + uri, {observe: 'body'});
  }

  getDownloadLink(ep: Number) {
    return this.base_url + '/script?episode=' + ep;
  }

  handle_error(e: HttpErrorResponse) { return throwError(e); }
}
