import {Component, Input} from '@angular/core';
import {Card} from "../../models/card";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: Card;

  constructor(public CardService: CardService) {

  }
}
