import { Injectable } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Observable} from 'rxjs';
import { SERVER_API_URL, SEARCH_BY_TAG_STORY} from 'src/app/app.constant'

@Injectable()
export class MainListService {

  // Component level service

  constructor(private dataService: FetchDataService) { }
  /**
     * @ngdoc method
     * @name getData
     * @methodOf MainListService
     * @description
     * Get the data for Story list from server
     * @param url - name of url
     */
  getData(){
    return new Observable((observer: any) => { 
    let url = SERVER_API_URL + SEARCH_BY_TAG_STORY;
    this.dataService.getData(url).subscribe(res=>{
      
      observer.next(res.hits);
      observer.complete();
    },err=>{
        observer.error(err) ;
    });

    });
  }
}
