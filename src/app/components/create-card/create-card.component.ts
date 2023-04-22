import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent {
  form = new FormGroup({
    firstName: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl<string>('',
      [Validators.required, Validators.email]),
    phone: new FormControl<string>('',
      [Validators.required, Validators.minLength(10)]),
  })

  submit(){
    console.log("submit");
  }
}
