import { Component } from '@angular/core';
import {Card} from "./models/card";
import {ModalService} from "./services/modal.service";
import {CardService} from "./services/card.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(public modalService: ModalService,
              public cardService: CardService,
              ){
  }
  title = 'Angular lecture 1';
  filtration: string = '';
  cards: Card[] = this.cardService.getAll();
  isDesc = false;
  ascOrDesc: "asc" | "desc" = 'asc';

  selectAll(){
    this.cards.forEach(p => p.selected = true);
  }

  deleteSelected(){
    this.cards = this.cards.filter(p => !p.selected);
  }

  sort(){
    switch (this.ascOrDesc){
      case "asc":
        this.isDesc = false;
        break;
      case "desc":
        this.isDesc = true;
        break;
        default:
          break;
    }
  }
}
