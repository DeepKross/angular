import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CardService} from "../../services/card.service";
import {Card} from "../../models/card";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  constructor(public CardService: CardService,
              public ModalService: ModalService) {
  }

  form = new FormGroup({
    firstName: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10)]
    ),
  })

  submit(){
    console.log(this.form.value);
    this.CardService.createCard({
                                  firstname: this.form.value.firstName as string,
                                  lastname: this.form.value.lastName as string,
                                  email: this.form.value.email as string,
                                  phone: this.form.value.phone as string,
                                  selected: false
                                });
    this.ModalService.close();
  }
}
