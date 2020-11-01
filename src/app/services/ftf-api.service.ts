import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { AvailabilityForm } from 'src/app/models/AvailabilityForm';
import { common } from 'src/environments/common';

@Injectable({
  providedIn: 'root'
})

export class FtfApiService {
  constructor(private http: HttpClient){}

  getAvailable(): Observable<AvailabilityForm> {
    const uri = '/available';
    return this.http.get<AvailabilityForm>(common.ftf_api + uri, {observe: 'body'});
  }

  getScriptLink(ep: String) {
    if(ep != 'all') {
      try{ new Number(ep); }
      catch(e){
        console.error(e);
        return null;
      }
    }

    return common.ftf_api + '/script?episode=' + ep;
  }

  getSubtitlesZipLink() {
    return common.ftf_api + '/script?episode=all';
  }

  handle_error(e: HttpErrorResponse) { return throwError(e); }
}
