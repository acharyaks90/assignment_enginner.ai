import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MainListService } from './main-list.service';
import { timer, Observable, Subject, of } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import { Story } from 'src/app/interface/story.interface';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  providers :  [ MainListService]
})
export class MainListComponent implements OnInit, OnDestroy {




  private unsubsScribe: Subject<void> = new Subject();

  storyList: Array<Story>=[];  // Interface for data types
  closeResult: string;
  storyData : string = "";
  filter : string = "";
  private fetchData$: Observable<any> = this.helperService.getData();
  private refreshInterval$: Observable<string> = timer(0, 10000)
  .pipe(
    // This unsusbscribe the request if the user closes the component 
    takeUntil(this.unsubsScribe),
    // switchMap cancels the last request
    switchMap(() => this.fetchData$),
    // catchError handles 
    catchError(error => of('Error'))
  );

 constructor(private helperService: MainListService , private modalService: NgbModal ) { }

 ngOnInit() {
  // Getting the Story list
  this.fetchData$.subscribe((res:any)=>{
    this.storyList = res;
   })
  }


 /**
     * @ngdoc method
     * @name open
     * @methodOf MainListComponent
     * @description
     * Open the Modal
     * @param content the html template
     */
 open(content) {
   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
   }, (reason) => {
     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });
 }
  /**
     * @ngdoc method
     * @name getDismissReason
     * @methodOf MainListComponent
     * @description
     * Dismiss the Modal
     * @param reason - any cause
     */
 private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return  `with: ${reason}`;
   }
 }
 // Destroy lifescycle hooks
 ngOnDestroy(){
  this.unsubsScribe.next();
}

}
