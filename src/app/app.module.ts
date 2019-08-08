import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainListComponent } from './layouts/main-list/main-list.component';
import { TitleFilterPipe } from './filters/title-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    TitleFilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
