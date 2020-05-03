import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AvailabilityForm } from 'src/app/models/AvailabilityForm';

@Injectable({
  providedIn: 'root'
})
export class FtfApiService {
  base_url: String;

  constructor(private http: HttpClient) { this.base_url = "http://api.foxtrotfanatics.com"; }

  getAvailable(): Observable<any> {
    return this.http.get<any>(this.base_url + '/available', { responseType: 'json',
                                                              headers: {'Access-Control-Allow-Origin': '*'}})
      .pipe(
        tap(data => data),
        catchError(this.handle_error)
      );
  }

  handle_error(e: HttpErrorResponse) { return throwError(e); }
}
