import { Component } from '@angular/core';
import {Card} from "./models/card";
import {cards as data } from "./data/cards";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public modalService: ModalService) {
  }
  title = 'Angular lecture 1';
  filtration: string = '';
  cards: Card[] = data;
}
