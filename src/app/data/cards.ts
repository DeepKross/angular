import {Card} from "../models/card";
import {BehaviorSubject} from "rxjs";

export let cards: Card[] = [
  {
    id: 1,
    firstname: "Leanne",
    lastname: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    selected: false,
},
{
    id: 2,
    firstname: "Ervin",
    lastname: "Howell",
    email: "erwin@june,org",
    phone: "010-692-6593 x09125",
    selected: false,
},
{
    id: 3,
    firstname: "Clementine",
    lastname: "Bauch",
    email: "clement@gaa.com",
    phone: "1-463-123-4447",
    selected: false,
}
];

export class CardService {
  isSelected$ = new BehaviorSubject<boolean>(false);
  select(){
    this.isSelected$.next(!this.isSelected$.value);
  }
}
