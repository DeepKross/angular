import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterCardsPipe } from './pipes/filter-cards.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { SortPipe } from './pipes/sort.pipe';
import {OrderModule} from "ngx-order-pipe";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterCardsPipe,
    ModalComponent,
    CreateCardComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
