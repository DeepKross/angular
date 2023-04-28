import { Injectable } from '@angular/core';
import {Card} from "../models/card";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {responseCard} from "../models/responseCard";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {

  }

  cards: Card[] = [];

  getAll(): Observable<Card[]>{
    return this.http.get<responseCard[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(notMapped => console.log(notMapped)),
        map((items: responseCard[]) => items
          .map(card => ({
            firstname: card.name.split(" ").shift() as string,
            lastname: card.name.split(" ").slice(1).join(" ") as string,
            email: card.email as string,
            phone: card.phone as string,
            selected: false
          })
      )), tap(mappedItems => this.cards = mappedItems)
      );
  }

  create(card: any): Observable<responseCard>{
    return this.http.post<responseCard>('https://jsonplaceholder.typicode.com/users', card)
      .pipe(
        tap(new_card => {this.cards.push({
          firstname: new_card.name.split(" ").shift() as string,
          lastname: new_card.name.split(" ").slice(1).join(" ") as string,
          email: new_card.email as string,
          phone: new_card.phone as string,
          selected: false
        })
        console.log(this.cards);
        })
      );

  }

}
