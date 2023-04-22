import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {FormsModule} from "@angular/forms";
import { FilterCardsPipe } from './pipes/filter-cards.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterCardsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
