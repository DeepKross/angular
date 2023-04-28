import { Pipe, PipeTransform } from '@angular/core';
import {Card} from "../models/card";

@Pipe({
  name: 'filterCards'
})
export class FilterCardsPipe implements PipeTransform {

  transform(cards: Card[], search: string): Card[]{

    if(search === ''){ return cards; }

    return cards.filter(p => {
      return p.firstname.toLowerCase().includes(search.toLowerCase()) ||
        p.lastname.toLowerCase().includes(search.toLowerCase())
    })
  }

}
