import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterCardsPipe } from './pipes/filter-cards.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterCardsPipe,
    ModalComponent,
    CreateCardComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
