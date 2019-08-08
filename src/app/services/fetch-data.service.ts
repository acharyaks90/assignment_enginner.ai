import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }
  /**
     * @ngdoc method
     * @name getData
     * @methodOf FetchDataService
     * @description
     * Handle Http operation that failed.
     * @param url - name of url
     */

    getData(url) {
      console.log("FetchDataService: getData called",[]);
      
      return this.http.get(url)
          .pipe(
              catchError(this.handleError('Server Error', []))
          );
  }


   /**
     * Handle Http operation that failed.
     */
    private handleError (operation = 'operation', result) {
      return (error: any): Observable<any> => {
          console.error("FetchDataService: ngOnInit called",[error]);
          //console.error(error); // log to console instead

          // TODO: better job of centre message
          // Let the app keep running by returning an empty result.
          // TODO log in local file
          return of(result);
      };
  }

}
