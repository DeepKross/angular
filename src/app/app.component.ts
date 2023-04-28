import { Component, OnInit } from '@angular/core';
import {ModalService} from "./services/modal.service";
import {CardService} from "./services/card.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public modalService: ModalService,
              public cardService: CardService,
              ){
  }
  title = 'Angular lecture 1';
  filtration: string = '';
  isDesc = false;
  ascOrDesc: "asc" | "desc" = 'asc';
  loading = false;

  selectAll(){
    this.cardService.selectAll();
  }

  deleteSelected(){
    this.cardService.delete();
  }

  ngOnInit(){
    this.loading = true;
    this.cardService.getAll().subscribe(() => {
      this.loading = false;
    });

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
