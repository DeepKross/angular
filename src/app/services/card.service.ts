import { Injectable } from '@angular/core';
import {cards as data} from "../data/cards";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards: Card[] = data;

  createCard(card: Card){
    this.cards.push(card);
  }

  getAll(): Card[]{
    return this.cards;
  }

}
